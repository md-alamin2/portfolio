import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/myLogo.png"

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " font-semibold bg-primary text-white" : " font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? " font-semibold bg-primary text-white" : " font-medium"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? " font-semibold bg-primary text-white" : " font-medium"
          }
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? " font-semibold bg-primary text-white" : " font-medium"
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? " font-semibold bg-primary text-white" : " font-medium"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-xl font-semibold text-primary">
          <img className="w-30" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary btn-outline">Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
