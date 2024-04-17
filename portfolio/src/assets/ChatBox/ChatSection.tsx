import React, { useEffect, useRef } from "react";
import Time from "./Time";
import MyChat from "./MyChat";
import ReceivedChat from "./ReceivedChat";
import { colors } from "../../../config/colors";

const ChatSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor: colors.chatBg,
        height: "75%",
        padding: "5px",
        overflow: "scroll",
        flexShrink: 0,
      }}
      className="w-full flex flex-col flex-shrink-0"
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
