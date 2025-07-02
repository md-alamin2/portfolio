import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

const Skills = () => {
  const [skillsData, setSkillData] = useState([]);
  console.log(skillsData);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        setSkillData(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center"><span className="loading loading-dots loading-xl"></span></div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="skills"
          className="mt-20 max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold">Skills</h2>
          <div className="divider divider-primary w-15 my-1"></div>
          <div className="max-w-5xl mx-auto mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                key={index}
                className="px-4 py-8 shadow-lg rounded-lg text-center border border-gray-200 hover:shadow-xl"
              >
                <img className="w-15 mx-auto" src={skill.icon} alt="" />
                <h3 className="text-2xl font-bold mt-2">{skill.name}</h3>
                <p className="mt-2 font-semibold">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Skills;
