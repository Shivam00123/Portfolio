import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";

import "../styles/chatbox.css";
import Content from "@/assets/ChatBox/Content";

const ChatButton = () => {
  const [openChatBox, setOpenChatBox] = useState<boolean>(false);
  const [showhelperText, setShowHelperText] = useState<boolean>(false);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setShowHelperText(true);
    }, 3000);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (openChatBox) {
      document.body.style.overflow = "hidden";
      clearTimeout(timerRef.current);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openChatBox]);

  const closeChatBox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenChatBox(false);
  };

  const handleChatBoxState = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowHelperText(false);
    setOpenChatBox(true);
  };

  return (
    <div
      onClick={closeChatBox}
      className={`bg-[rgba(0,0,0,0.5)] fixed z-10  transition-all ${
        openChatBox ? "chatbox-bg-open" : "chatbox-bg-close cursor-pointer"
      }`}
    >
      <div
        id="chatbox"
        onClick={handleChatBoxState}
        className={`fixed bottom-10 z-50 transition-all duration-500 right-20 bg-font-white grid place-items-center text-xl ${
          openChatBox ? "chatbox-open" : "chatbox-close"
        }`}
      >
        {!openChatBox ? (
          <FaPlus />
        ) : (
          <Content openChatBox={openChatBox} setOpenChatBox={closeChatBox} />
        )}

        {!openChatBox && (
          <div
            className={`w-fit h-fit z-30 text-sm absolute whitespace-nowrap right-6 bg-font-white py-1 px-3 rounded-t-md rounded-bl-md transition-all chatbox-after ${
              showhelperText
                ? "showHelperText animate-bounce"
                : "hideHelperText"
            }`}
          >
            <p>Want to connect with me?</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatButton;
