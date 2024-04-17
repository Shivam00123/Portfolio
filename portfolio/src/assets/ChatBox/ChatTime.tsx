import React from "react";

const ChatTime = () => {
  return (
    <div
      style={{ fontSize: "10px", width: "35px", marginLeft: "16px" }}
      className=" h-full grid place-items-start relative"
    >
      <p style={{ bottom: "-5px", right: 0 }} className="absolute">
        02:34
      </p>
    </div>
  );
};

export default ChatTime;
