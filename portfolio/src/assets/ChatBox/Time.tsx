import React from "react";
import { colors } from "../../../config/colors";

const Time = () => {
  return (
    <div
      style={{
        fontSize: "8px",
        backgroundColor: colors["chatBox-bg-light"],
        padding: "0px 5px",
        margin: "0px auto 16px auto",
      }}
      className="font-semibold w-fit h-fit rounded-md"
    >
      4 April, 2024
    </div>
  );
};

export default Time;
