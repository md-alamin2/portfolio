import React from "react";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router";
import ImageSlider from "../Slider/Slider";
import { CiPaperplane } from "react-icons/ci";

const ProjectDetails = () => {
  const projects = useLoaderData();
  const { id } = useParams();
  const singleProject = projects.find((project) => project.id == id);
  console.log(singleProject);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Back button */}
      <Link to="/" className="btn btn-primary text-white mb-5">
        <FaArrowLeft></FaArrowLeft>
        Back to Projects
      </Link>

      {/* Project header */}
      <div className="flex flex-col gap-8 mb-12">
        {/* Project image */}
        <div>
          <ImageSlider images={singleProject.image}></ImageSlider>
        </div>

        {/* project info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {singleProject.title}
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            {singleProject.description}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            {singleProject.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-white"
              >
                {link.type === "Live" ? (
                  <CiPaperplane className="mr-2" />
                ) : (
                  <FaGithub className="mr-2" />
                )}
                {link.type}
              </a>
            ))}
          </div>

          {/* Key features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {singleProject.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges Faced */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Challenges Faced
            </h2>
            <ul className="space-y-3">
              {singleProject.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-yellow-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Plans */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Future Plans & Improvements
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {singleProject.futurePlans.map((plan, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-gray-700">{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-6">
          {singleProject.tech.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={tech.icon}
                alt={tech.tech}
                className="w-10 h-10 object-contain mb-2"
              />
              <span className="text-gray-700">{tech.tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
