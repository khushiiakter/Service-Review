import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About US</NavLink>
      </li>
    </>
  );
  
  return (
    <div className="navbar   ">
      <div className="navbar-start ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <ul className="menu menu-horizontal  px-1 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
        </ul>
        {user && (
          <ul className="menu menu-horizontal  px-1 ">
           
            <li>
              <NavLink to="/add-service">Add Service</NavLink>
            </li>
            <li>
              <NavLink to="/my-services">My Service</NavLink>
            </li>
            <li>
              <NavLink to="/myReviews">My Reviews</NavLink>
            </li>
            
          </ul>
        ) }
        <ul className="menu menu-horizontal  px-1 ">
            

            <li>
              <NavLink to="/aboutUs">About US</NavLink>
            </li>
          </ul>
          </ul>
        </div>
        <a className=" md:text-2xl font-bold">Service Review</a>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal  px-1 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
        </ul>
        {user && (
          <ul className="menu menu-horizontal  px-1 ">
           
            <li>
              <NavLink to="/add-service">Add Service</NavLink>
            </li>
            <li>
              <NavLink to="/my-services">My Service</NavLink>
            </li>
            <li>
              <NavLink to="/myReviews">My Reviews</NavLink>
            </li>
            
          </ul>
        ) }
        <ul className="menu menu-horizontal  px-1 ">
            

            <li>
              <NavLink to="/aboutUs">About US</NavLink>
            </li>
          </ul>
        
      </div>
      <div className="md:block hidden"></div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="relative group hidden md:block">
              <img
                src={user?.photoURL ||
                  `${"https://i.ibb.co.com/Rh2DLGL/blank-profile-picture-973460-640.png"}`
                }
                // alt="Profile"
                className="border-2 border-[#e3e5f3d5] w-11 h-11 mr-2 rounded-full object-cover cursor-pointer ml-16"
              />
              <div
                className="absolute -right-4
               top-[60px] max-w-max bg-gray-800 text-white text-sm shadow-lg p-2 rounded hidden group-hover:block"
              >
                {user?.displayName || "User"}
              </div>
            </div>
            <Link
              onClick={logOut}
              className="btn bg-[#5f1a89] rounded-2xl px-5 text-white hover:border-white border-neutral hover:bg-black"
            >
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/auth/login"
              className="btn bg-[#5f1a89] rounded-2xl mr-2 px-5 text-white hover:border-white border-neutral hover:bg-black"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="btn bg-[#5f1a89] rounded-2xl px-5 text-white hover:border-white border-neutral hover:bg-black"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

//