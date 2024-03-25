import React from "react";
import "@/styles/fetching.css";

const Fetching = ({ title }: { title: string }) => {
  return (
    <div style={{ margin: "50px 0" }}>
      <div className="darksoul-layout">
        <div className="darksoul-grid">
          <div className="item1"></div>
          <div className="item2"></div>
          <div className="item3"></div>
          <div className="item4"></div>
        </div>
        <h3 className="darksoul-loader-h" style={{ whiteSpace: "nowrap" }}>
          fetching {title}
        </h3>
      </div>
    </div>
  );
};

export default Fetching;
