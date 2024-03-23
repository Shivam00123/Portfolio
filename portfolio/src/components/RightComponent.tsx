"use client";

import React, { useRef, useState } from "react";
import About from "./About";
import Experiences from "./Experiences";
import Resume from "./Resume";
import Projects from "./Projects";
import PersonalProjects from "./PersonalProjects";

const RightComponent = () => {
  return (
    <div
      style={{
        scrollBehavior: "smooth",
      }}
      className="w-full h-full lg:pl-[40%] overflow-y-scroll py-20 text-paragraph flex justify-center lg:justify-end"
    >
      <div className="w-full lg:w-3/5 h-full mx-10  lg:mr-[20%]">
        <About />
        <Experiences />
        <Resume />
        <Projects />
        <PersonalProjects />
      </div>
    </div>
  );
};

export default RightComponent;
