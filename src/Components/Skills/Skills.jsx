import React, { use } from "react";

const skillsPromise = fetch("/skills.json").then((res) => res.json());

const Skills = () => {
  const skillsData = use(skillsPromise);
  return (
    <div id="skills" className="mt-20 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold">Skills</h2>
      <div className="divider divider-primary w-15 my-1"></div>
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="px-4 py-8 shadow-lg rounded-lg text-center"
          >
            <img className="w-15 mx-auto" src={skill.icon} alt="" />
            <h3 className="text-2xl font-bold mt-2">{skill.name}</h3>
            <p className="mt-2 font-semibold">{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
