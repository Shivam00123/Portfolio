import React from "react";
import { colors } from "../../../config/colors";
import ChatTime from "./ChatTime";

const ReceivedChat = () => {
  return (
    <div
      style={{
        backgroundColor: colors.pureWhite,
        maxWidth: "70%",
        width: "fit-content",
        margin: "0px auto 16px 20px",
        padding: "8px 15px",
        borderTopRightRadius: "15px",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        color: "black",
      }}
      className="text-xs receivedChat relative flex"
    >
      <p>my name is Anthony Gonsalvis! how are you hope you doing</p>
      <ChatTime />
    </div>
  );
};

export default ReceivedChat;
