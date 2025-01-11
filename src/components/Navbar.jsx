import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import logo from "/review.png"
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
 
// navbar fixed z-50 md:px-6   w-full  backdrop-blur-2xl bg-black -px-4 text-white 
  return (
    <div className="navbar    container mx-auto     ">
      <div className="navbar-start ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost  pl-0 lg:hidden">
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
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <ul className="menu menu-horizontal  px-1 ">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>

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
          </ul>
        </div>
        <a className="flex items-center md:gap-1 ">
          <img src={logo} className="h-7 md:block hidden" alt="" />
          <p className="md:text-2xl text-lg font-bold">Service Review</p>
          </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold  px-1 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
        </ul>
        {user && (
          <ul className="menu menu-horizontal  font-semibold  px-1 ">
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
        )}
      </div>
      <div className="md:block hidden"></div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="relative group hidden md:block">
              <img
                src={
                  user?.photoURL ||
                  `${"https://i.ibb.co.com/Rh2DLGL/blank-profile-picture-973460-640.png"}`
                }
                // alt="Profile"
                className="border-2 border-[#e3e5f3d5] w-11 h-11 mr-3 rounded-full object-cover cursor-pointer ml-16"
              />
              <div
                className="absolute -right-4
               top-[50px] max-w-max z-20 bg-gray-800 text-white text-sm shadow-lg p-2 rounded hidden group-hover:block"
              >
                {user?.displayName || "User"}
              </div>
            </div>
            <Link
              onClick={logOut}
              className="md:py-2 py-2 px-4 mr-2 text-sm md:text-base text-white bg-[#0F1035] font-semibold hover:bg-green-800 rounded-full md:px-5  hover:border-white "
            >
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/auth/login"
              className="md:py-2 py-2 px-4 mr-2 text-sm md:text-base text-white bg-[#0F1035] font-semibold hover:bg-green-800 rounded-full md:px-5  hover:border-white "
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="md:py-2 text-white py-2 px-4 text-sm md:text-base bg-[#0F1035] font-semibold hover:bg-green-800 rounded-full md:px-5  hover:border-white "
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
