import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

const Project = () => {
  const [projectsData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjectData(data);
        setLoading(false);
      });
  });
  return (
    <motion.div
      id="project"
      initial={{ opacity: 0 }}
      animate={{opacity:1}}
      transition={{ duration: 2, delay: 0.3 }}
      className="mt-20 relative"
    >
      <h2 className="text-4xl font-bold sticky top-0 md:top-25">Project</h2>
      <div className="divider divider-primary w-15 my-1 sticky top-5 md:top-36"></div>

      {loading ? (
        <span className="loading loading-dots loading-xl"></span>
      ) : (
        <div className="flex flex-col gap-4 relative">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} index={index} project={project}></ProjectCard>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Project;
