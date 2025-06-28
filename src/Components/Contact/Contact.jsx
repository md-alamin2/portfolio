import React from "react";
import mailImg from "../../assets/mail.png";
import waImg from "../../assets/whatsapp.png";
import liIcon from "../../assets/linkedIn.png";
import githubIcon from "../../assets/github.png";
import fbIcon from "../../assets/fb.png";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="mt-20 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mt-20">Contact Me</h2>
      <div className="divider divider-primary w-15 my-1"></div>
      <div className="flex items-center justify-evenly gap-10 bg-base-200 py-6 px-10 rounded-lg">
        <div className="mt-10">
          <div className="max-w-sm mx-auto">
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
        </div>
        <div>
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default Contact;
