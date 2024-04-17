import React, { useState } from "react";
import { ImAttachment } from "react-icons/im";
import { BsEmojiDizzy } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

import { colors } from "../../../config/colors";

const InputSection = () => {
  const [message, setMessage] = useState<string>("");
  return (
    <div
      style={{
        height: "100%",
        padding: "0px 10px",
        borderTop: `1px solid ${colors["chatBox-bg-light"]}`,
      }}
      className="w-full flex items-center justify-between"
    >
      <div style={{ padding: "5px" }} className="p-5 rounded-full">
        <BsEmojiDizzy />
      </div>
      <div
        className="rounded-full overflow-hidden"
        style={{ width: "80%", height: "60%" }}
      >
        <input
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: "0px 10px", outline: "none" }}
          type="text"
          className="w-full h-full text-sm outline-none"
          placeholder="Message..."
        />
      </div>
      <div
        style={{ width: "15%", margin: "0px 10px" }}
        className="flex items-center mx-2 justify-center"
      >
        {message ? (
          <IoSend />
        ) : (
          <>
            <ImAttachment style={{ marginRight: "10px" }} />
            <FaMicrophone />
          </>
        )}
      </div>
    </div>
  );
};

export default InputSection;
