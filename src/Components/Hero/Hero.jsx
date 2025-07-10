import React from "react";
import { Typewriter } from "react-simple-typewriter";
import myImg from "../../assets/1000024915.png";
import liIcon from "../../assets/linkedIn.png";
import githubIcon from "../../assets/github.png";
import fbIcon from "../../assets/fb.png";
import { motion } from "motion/react";
import { FaDownload, FaFileDownload } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id="home" className="md:pt-10">
      <div className=" bg-base-200 py-15 rounded-xl">
        <div className="flex flex-col-reverse md:flex-row md:justify-around items-center gap-4 lg:gap-0 px-4 lg:px-0 ">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-center md:text-start"
          >
            <h1 className="text-5xl font-bold">
              Hello, I'm MD <span className="text-primary">Al-amin</span>
            </h1>
            <p className="py-4 text-2xl font-bold text-primary">
              <Typewriter
                words={["MERN-Stack Developer", "Frontend Developer"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <p className="max-w-[450px] font-semibold opacity-70">
              I'm a MERN-Stack Developer skilled in React, Tailwind, Node.js,
              and MongoDB. Currently studying Computer Science. I build fast,
              responsive web apps and love creating real-world digital
              solutions.
            </p>
            <div className="flex justify-center md:justify-start items-center gap-2 mt-4">
              <a href="https://github.com/md-alamin2" target="_blank">
                <img
                  className="w-10 rounded-full hover:shadow-lg"
                  src={githubIcon}
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/in/md-al-amin823/"
                target="_blank"
              >
                <img
                  className="w-10 rounded-full hover:shadow-lg"
                  src={liIcon}
                  alt=""
                />
              </a>
              <a
                href="https://www.facebook.com/alamin.akash.7399"
                target="_blank"
              >
                <img
                  className="w-10 rounded-full hover:shadow-lg"
                  src={fbIcon}
                  alt=""
                />
              </a>
            </div>
            <div className="mt-5 flex items-center justify-center md:justify-start gap-3">
              <a href="/MD_Al-amin_Resume.pdf" download="MD_Al-amin_Resume.pdf" className="btn btn-primary text-white mt-4">
                <FaFileDownload size={20} /> Resume
              </a>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="btn btn-primary btn-outline hover:text-white mt-4"
              >
                <RiContactsBook2Fill size={20} /> Contact
              </Link>
            </div>
          </motion.div>
          <motion.img
            src={myImg}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="max-w-60 md:mr-4 lg:mr-0 rounded-full shadow-[0px_0px_31px_2px_#0e25ea,0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
