import React from "react";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

const Container = () => {
  return (
    <div
      style={{
        scrollBehavior: "smooth",
      }}
      className="w-screen h-full lg:h-screen  lg:max-h-screen flex flex-col lg:flex-row relative lg:overflow-hidden text-font-white"
    >
      <LeftComponent />
      <RightComponent />
    </div>
  );
};

export default Container;
