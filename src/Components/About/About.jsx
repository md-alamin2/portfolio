import React from "react";
import aboutImg from "../../assets/about.png";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      id="about"
      className="mt-20"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:relative">
        <div className="lg:w-1/2">
          <img className="w-140 mx-auto" src={aboutImg} alt="" />
        </div>
        <div className="lg:w-1/2">
          <div className="md:absolute lg:relative top-0">
            <h2 className="text-4xl font-bold">About Me</h2>
            <div className="divider divider-primary w-20 my-1 font-bold"></div>
          </div>
          <div className="text-base font-medium opacity-75">
            <p className="mt-2">
              <strong className="text-black">Hello! I’m Md. Al-amin</strong>, a
              passionate{" "}
              <strong className="text-black">MERN-Stack Web Developer</strong>{" "}
              who enjoys turning ideas into functional, user-friendly, and
              visually appealing web applications. I build modern interfaces
              with <strong className="text-black">React</strong> and{" "}
              <strong className="text-black">Tailwind</strong> , and connect
              them to robust backends using{" "}
              <strong className="text-black">Node</strong>,{" "}
              <strong className="text-black">Express</strong> and{" "}
              <strong className="text-black">MongoDB</strong>.
            </p>
            <p className="mt-2">
              <strong className="text-black">My journey</strong> started during
              college when I realized how a few lines of code could bring an
              idea to life. I began with{" "}
              <strong className="text-black">HTML, CSS, and JavaScript</strong>,
              and later moved to full-stack development with the MERN stack.
              Over time I’ve built several projects that cover the entire
              development cycle — from UI design and frontend logic to API
              design and deployment.
            </p>
            <p className="mt-2">
              <strong className="text-black">I enjoy</strong> working on
              projects that solve real-world problems and deliver meaningful
              value to users. Whether it’s building responsive interfaces,
              integrating robust backends, or optimizing performance, I find
              satisfaction in the entire process—from brainstorming to
              deployment.
            </p>
            <p className="mt-2">
              Outside of coding I love{" "}
              <strong className="text-black">watching football</strong>,{" "}
              <strong className="text-black">
                playing and watching cricket
              </strong>
              , <strong className="text-black">singing</strong>, and{" "}
              <strong className="text-black">traveling</strong>. These
              activities keep me energized, inspire my creativity, and help me
              approach problems with fresh perspectives.
            </p>
            <p className="mt-2">
              I’m curious, persistent, and user-focused. I value clear
              communication and continuous improvement — I enjoy learning new
              tools, accepting feedback, and iterating quickly to deliver
              solutions that are both useful and delightful.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
