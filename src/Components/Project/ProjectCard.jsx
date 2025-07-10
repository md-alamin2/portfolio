import React from "react";
import { motion } from "motion/react";
import { CiPaperplane } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className={`bg-base-100 border border-gray-200 rounded-xl p-4 flex flex-col lg:flex-row gap-2 md:gap-6 shadow mt-5 sticky top-35 md:top-44 z-2 ${index>0&& "top-39 md:top-48"} ${index>1&& "top-43 md:top-52"} ${index>2&& "top-51 md:top-56"} ${index>3&& "top-56 md:top-60"}`}
    >
      {/* Scrollable image section */}
      <div className="lg:w-1/2 overflow-hidden relative h-40 md:h-80 rounded-xl border border-gray-200 group">
        <div className="w-full h-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full  transition-transform duration-[1000ms] ease-linear group-hover:-translate-y-1/3"
          />
        </div>
      </div>

      {/* Right content */}
      <div className="lg:w-1/2 space-y-1 md:space-y-3">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="text-gray-600">{project.description}</p>
        <div>
          <p className="font-semibold">Key Features:</p>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {project.keyFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mt-2 max-w-md">
          <p className="font-semibold">Tech:</p>
          {project.tech.map((tech, i) => (
            <span key={i} className="badge bg-base-300 rounded text-sm border flex items-center hover:transition hover:duration-500 hover:border-primary">
             <img className="w-5" src={tech.icon} alt="" /> {tech.tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="btn btn-primary text-white"
              target="_blank"
              rel="noreferrer"
            >
              {index==0?<CiPaperplane size={20} />:<FaGithub size={20} />} {link.type}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
