import React from "react";
import logo from "../../assets/myLogo.png";
import { Link } from "react-scroll";
import { motion } from "motion/react";
import { FaCode, FaFileDownload, FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { PiProjectorScreenFill } from "react-icons/pi";
import { RiContactsBook2Fill } from "react-icons/ri";

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
          className="text-base font-medium flex items-center gap-1 mr-2"
        >
          <FaHome size={16} />Home
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
          className="text-base font-medium flex items-center gap-1 mr-2"
        >
          <IoPersonSharp size={16} />About
        </Link>
      </li>
      <li>
        <Link
          activeClass=" !bg-primary text-white"
          to="skills"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="text-base font-medium flex items-center gap-1 mr-2"
        >
          <FaCode size={16} />Skills
        </Link>
      </li>
      <li>
        <Link
          activeClass=" !bg-primary text-white"
          to="project"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="text-base font-medium flex items-center gap-1 mr-2"
        >
          <PiProjectorScreenFill size={16} />Projects
        </Link>
      </li>
      <li>
        <Link
          activeClass="!bg-primary text-white"
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="text-base font-medium flex items-center gap-1"
        >
          <RiContactsBook2Fill size={16} />Contact
        </Link>
      </li>
    </>
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="navbar px-0 mb-0 w-11/12 lg:container mx-auto mt-0"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-2">
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
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="text-xl font-semibold text-primary cursor-pointer"
        >
          <img className="w-30" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary btn-outline"><FaFileDownload />Resume</a>
      </div>
    </motion.div>
  );
};

export default Navbar;
