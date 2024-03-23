import React from "react";
import MenuItems from "./MenuItems";
import SocialLinks from "./SocialLinks";

const LeftComponent = () => {
  return (
    <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-between lg:mx-5 lg:absolute left-0 top-0 py-20 lg:pointer-events-none">
      <div className="flex flex-col items-center lg:items-start">
        <h1 className="text-5xl font-bold">Shivam Rawat</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
          Frontend Engineer
        </h2>
        <p className="w-full lg:w-fit text-center lg:text-left mt-4 max-w-xs leading-normal text-paragraph">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
      </div>
      <MenuItems />
      <SocialLinks />
    </div>
  );
};

export default LeftComponent;
