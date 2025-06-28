import React from "react";
import aboutImg from "../../assets/about.png";

const About = () => {
  return (
    <div id="about" className="mt-20">
      <div className="flex justify-center items-center gap-8">
        <div className="md:w-1/2">
          <img className="w-140 mx-auto" src={aboutImg} alt="" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold">
            About Me
          </h2>
          <div className="divider divider-primary w-20 my-1 font-bold"></div>
          <div className="text-base font-medium opacity-75">
            <p >
              Hello! I'm Md. Al-amin, a dedicated and passionate MERN-Stack Web
              Developer with a strong focus on frontend and backend
              technologies. I specialize in crafting clean, modern, and
              responsive web applications using React, Tailwind CSS, Firebase,
              Node.js, Express.js and MongoDB. I love turning ideas into fully functional
              digital products that are intuitive, fast, and impactful.
            </p>
            <p className="my-2">
              Currently, I'm pursuing a Diploma in Computer Science & Technology
              and am in my 5th semester. My academic background has given me a
              solid foundation in programming concepts, and problem-solving
              techniques. I constantly push myself to learn and grow through
              hands-on experience, whether it's building personal projects,
              collaborating with peers, or taking on freelance tasks. I thrive
              in environments where I can solve real-world problems using
              technology.
            </p>{" "}
            <p>
              My goal is to build meaningful solutions that not only meet client
              needs but also provide value to users. Beyond technical skills, I
              believe in continuous improvement, strong communication, and a
              user-first approach. I’m always open to feedback and eager to
              adopt the latest tools and best practices in the industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
