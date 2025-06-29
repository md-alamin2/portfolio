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
            <p>
              <strong className="text-black">Hello! I'm Md. Al-amin</strong>, a
              dedicated and passionate{" "}
              <strong className="text-black">MERN-Stack Web Developer</strong>{" "}
              with a strong focus on frontend and backend technologies. I
              specialize in crafting clean, modern, and responsive web
              applications using{" "}
              <strong className="text-black">
                React, Tailwind CSS, Firebase, Node.js, Express.js and MongoDB.
              </strong>{" "}
              I love turning ideas into fully functional digital products that
              are intuitive, fast, and impactful.
            </p>
            <p className="my-2">
              <strong className="text-black">
                Currently, I'm pursuing a Diploma in Computer Science &
                Technology and am in my 5th semester.
              </strong>{" "}
              My academic background has given me a solid foundation in
              programming concepts, and problem-solving techniques. I thrive in
              environments where I can solve real-world problems using
              technology.
            </p>{" "}
            <p>
              <strong className="text-black">My goal</strong> is to build
              meaningful solutions that not only meet client needs but also
              provide value to users. Beyond technical skills, I believe in
              continuous improvement, strong communication, and a user-first
              approach. I’m always open to feedback and eager to adopt the
              latest tools and best practices in the industry.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
