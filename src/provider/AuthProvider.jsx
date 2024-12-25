import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const userLogIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  const authInfo = {
    
    setUser,
    loading,
    createNewUser,
    logOut,
    userLogIn,
    auth,
    user,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if(currentUser?.email){
        const user = { email: currentUser.email };

        axios.post("http://localhost:5000/jwt", user, { withCredentials: true })
        .then(res =>{
          console.log('login token', res.data);
          setLoading(false);
      })
      }else {
        axios.post('http://localhost:5000/logout', {}, {
            withCredentials: true
        })
        .then(res => {
            console.log('logout', res.data);
            setLoading(false);
        })
    }
      
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
