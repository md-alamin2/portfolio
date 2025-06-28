import React from "react";
import logo from "../../assets/myLogo.png";
import { Link } from "react-scroll";

const Navbar = () => {

  const links = (
    <>
      <li>
        <Link
          activeClass=" !bg-primary text-white"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="font-medium"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          activeClass=" !bg-primary text-white"
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="font-medium"
        >
          About
        </Link>
      </li>
      <li>
        <a
          activeClass=" !bg-primary text-white"
          to="skills"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="font-medium"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          activeClass=" !bg-primary text-white"
          to="project"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="font-medium"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          activeClass="!bg-primary text-white"
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="font-medium"
        >
          Contact
        </a>
      </li>
    </>
  );
  return (
    <div className="navbar mb-0 bg-base-100">
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
        <a to="/" className="text-xl font-semibold text-primary">
          <img className="w-30" src={logo} alt="" />
        </a>
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
