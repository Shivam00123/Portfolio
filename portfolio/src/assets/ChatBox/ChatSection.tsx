import React from "react";
import Time from "./Time";
import MyChat from "./MyChat";
import ReceivedChat from "./ReceivedChat";
import { colors } from "../../../config/colors";

const ChatSection = () => {
  return (
    <div
      style={{
        backgroundColor: colors.chatBg,
        height: "75%",
        padding: "5px",
        overflow: "scroll",
        flexShrink: 0,
      }}
      className="w-full h-1/2 flex flex-col flex-shrink-0"
    >
      <Time />
      <MyChat />
      <ReceivedChat />
      <MyChat />
      <MyChat />
      <ReceivedChat />
      <ReceivedChat />
      <MyChat />
    </div>
  );
};

export default ChatSection;
