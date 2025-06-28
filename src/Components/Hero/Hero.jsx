import React from "react";
import { Typewriter } from "react-simple-typewriter";
import myImg from "../../assets/1000024915.png";
import liIcon from "../../assets/linkedIn.png";
import githubIcon from "../../assets/github.png";
import fbIcon from "../../assets/fb.png";

const Hero = () => {
  return (
    <div id="home" className="pt-20">
      <div className=" bg-base-200 py-15 rounded-xl">
        <div className="flex flex-col md:flex-row justify-around items-center ">
          <div>
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
            <p className="max-w-lg font-semibold opacity-70">
              I'm a MERN-Stack Developer skilled in React, Tailwind, Node.js,
              and MongoDB. Currently studying Computer Science. I build fast,
              responsive web apps and love creating real-world digital
              solutions.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <a href="https://github.com/md-alamin2" target="_blank">
                <img
                  className="w-10 rounded-full hover:shadow-lg"
                  src={githubIcon}
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/in/md-al-amin-7a191b339/"
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
            <button className="btn btn-primary mt-4">Resume</button>
          </div>
          <img src={myImg} className="max-w-60 rounded-full shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
