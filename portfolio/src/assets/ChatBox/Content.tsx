import React from "react";
import Header from "./Header";
import "./styles.css";
import ChatSection from "./ChatSection";
import InputSection from "./InputSection";

interface Props {
  openChatBox: boolean;
  setOpenChatBox: (e: React.MouseEvent) => void;
}

const Content: React.FC<Props> = ({ openChatBox, setOpenChatBox }) => {
  return (
    <div
      className={`w-full h-full flex flex-col justify-start bg-transparent transition-all duration-1000 ${
        openChatBox ? "content-visible" : ""
      }`}
    >
      <Header setOpenChatBox={setOpenChatBox} />
      <ChatSection />
      <InputSection />
    </div>
  );
};

export default Content;
