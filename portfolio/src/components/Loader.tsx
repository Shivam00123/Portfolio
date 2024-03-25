import React from "react";
import "@/styles/loader.css";

const Loader = () => {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="container">
        <span className="one spanEle"></span>
        <span className="two spanEle"></span>
        <span className="three spanEle"></span>
        <span className="four spanEle"></span>
      </div>
    </div>
  );
};

export default Loader;
