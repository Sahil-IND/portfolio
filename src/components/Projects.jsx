import React from "react";
import Card from "./Card";
import projectData from "../projectData";

const Projects = () => {
  return (
    <>
      <div id="projects" className="group mb-10 w-[260px]">
        <h2 className="text-left ml-24 text-5xl mt-12  font-semibold relative cursor-pointer w-[260px] text-[#00bcd4]">
          My Projects
        </h2>
        <div className="h-1 w-0 ml-24 bg-[#00bcd4] mt-2 mb-12 transition-all duration-300 group-hover:w-full mx-auto"></div>
      </div>
      <div className="w-[100%] flex justify-center items-center text-2xl ml-24 mb-24">
        <p className="text-gray-400">
          A collection of my technical skills and expertise honed through
          various projects and experiences!
        </p>
      </div>
      <div className="min-h-screen flex justify-center px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-18 mb-16">
        {projectData.map((project, index) => (
          <Card 
            key={index}
            img={project.img}
            title={project.title}
            desc={project.desc}
            site={project.site}
            code={project.code}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Projects;
