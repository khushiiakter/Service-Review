import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const { userLogIn, setUser, auth } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
        navigate("/");
      })

      .catch((error) => {
        setError("Failed to login with Google.");
      });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        setError("Invalid email or password.");
      });
  };

 

  return (
    <div className=" flex justify-center items-center md:py-7  bg-[#f2f4ff]">
      <div className="card bg-[#e3e5f3d5]  w-full  md:max-w-lg shrink-0 md:border-2 border-[#556180] md:rounded-3xl rounded-none md:p-9 px-1 py-6">
        <h2 className="text-3xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {error && (
              <label className="label text-sm text-red-700">{error}</label>
            )}

            <label className="label">
              <Link
                to="/auth/forget-password"
                state={{ email }}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-3">
            <button className="btn btn-neutral rounded-full">Login</button>
          </div>

          <div className="divider text-black">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline rounded-full"
          >
            Continue with Google
          </button>
        </form>
        <p className="text-center font-semibold">
          Don't Have An Account ?{" "}
          <Link className="text-red-500" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
