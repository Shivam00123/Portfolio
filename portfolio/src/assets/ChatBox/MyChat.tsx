import React from "react";
import { colors } from "../../../config/colors";
import ChatTime from "./ChatTime";

const MyChat = () => {
  return (
    <div
      style={{
        backgroundColor: colors.green,
        maxWidth: "70%",
        width: "fit-content",
        margin: "0px 20px 16px auto",
        padding: "8px 15px",
        borderTopLeftRadius: "15px",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        color: "white",
      }}
      className="text-xs mychat relative flex"
    >
      <p>my name is shivam! i am a s</p>
      <ChatTime />
    </div>
  );
};

export default MyChat;
