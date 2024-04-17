import React from "react";
import Header from "./Header";
import "./styles.css";
import ChatSection from "./ChatSection";
import InputSection from "./InputSection";
import { useRecoilState } from "recoil";
import UserForm from "./UserForm";
import { authState } from "../../../store/auth";

interface Props {
  openChatBox: boolean;
  setOpenChatBox: (e: React.MouseEvent) => void;
}

const Content: React.FC<Props> = ({ openChatBox, setOpenChatBox }) => {
  const [state] = useRecoilState(authState);
  return (
    <div
      className={`w-full h-full flex flex-col justify-start bg-transparent transition-all duration-1000 ${
        openChatBox ? "content-visible" : ""
      }`}
    >
      <Header setOpenChatBox={setOpenChatBox} />
      {state ? (
        <>
          <ChatSection />
          <InputSection />
        </>
      ) : (
        <UserForm />
      )}
    </div>
  );
};

export default Content;
