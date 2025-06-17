import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import OneSkill from "./OneSkill";

const Skills = () => {
  const mySkills = [
    {
      skill: "HTML",
      Icon: FaHtml5,
    },
    {
      skill: "CSS",
      Icon: DiCss3,
    },
    {
      skill: "JavaScript",
      Icon: FaJsSquare,
    },
    {
      skill: "ReactJS",
      Icon: FaReact,
    },
    {
      skill: "Redux",
      Icon: SiRedux,
    },
    {
      skill: "TailwindCSS",
      Icon: RiTailwindCssFill,
    },
  ];

  return (
    <div id='skilll'className="h-[40rem]">
      <div className="group mb-10 w-[195px]">
        <h2 className="text-left ml-24 text-5xl mt-24  font-semibold relative cursor-pointer w-[195px]">
          My Skills
        </h2>
        <div className="h-1 w-0 ml-24 bg-[#00bcd4] mt-2 mb-12 transition-all duration-300 group-hover:w-full mx-auto"></div>
      </div>
      <div className="w-[100%] flex justify-centeitems-center text-2xl ml-24 mb-48">
        <p className="text-gray-400">
          A collection of my technical skills and expertise honed through
          various projects and experiences!
        </p>
      </div>
      <div className="skills flex justify-center flex-wrap mt-10">
        {mySkills.map((item, index) => (
          <OneSkill key={index} skill={item.skill} Icon={item.Icon} />
        ))}
      </div>
      <hr className="border-00; bg-blue-600 h-[2.8px] mb-[40px] mx-[84px]" />
    </div>
  );
};

export default Skills;
