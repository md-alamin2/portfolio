import React from "react";
import mailImg from "../../assets/mail.png";
import waImg from "../../assets/whatsapp.png";
import liIcon from "../../assets/linkedIn.png";
import githubIcon from "../../assets/github.png";
import fbIcon from "../../assets/fb.png";
import ContactForm from "./ContactForm";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div id="contact" className="mt-20 mx-auto">
      <h2 className="text-4xl font-bold mt-20">Contact Me</h2>
      <div className="divider divider-primary w-15 my-1"></div>
      <div className="flex flex-col lg:flex-row items-start lg:justify-evenly gap-4 pt-10 rounded-lg">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className=" bg-base-200 w-full lg:w-1/2 rounded-lg relative"
        >
          <div className="max-w-sm lg:mx-auto px-4 lg:px-0 py-25 lg:py-0 lg:pt-25 lg:pb-40 ">
            <h3 className="text-2xl font-bold flex items-center gap-4 mb-5 absolute top-8"><span className="w-2 h-8 bg-primary rounded-2xl"></span>Contact Info</h3>
            {/* mail */}
            <div className="flex items-center gap-2">
              <img className="w-10" src={mailImg} alt="" />
              <p className="text-lg font-semibold">mdalamin22671@gmail.com</p>
            </div>
            {/* number */}
            <div className="flex items-center gap-3 mt-5">
              <img className="w-10" src={waImg} alt="" />
              <p className="text-lg font-semibold mt-2">+8801771-884750</p>
            </div>

            <div className="flex items-center gap-2 mt-5">
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

            <button className="btn btn-primary text-white mt-5">
              Download Resume
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 bg-base-200 rounded-lg"
        >
          <ContactForm></ContactForm>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
