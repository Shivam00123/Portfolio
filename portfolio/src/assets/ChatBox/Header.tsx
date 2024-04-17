import Image from "next/image";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { colors } from "../../../config/colors";

interface Props {
  setOpenChatBox: (e: React.MouseEvent) => void;
}

const Header: React.FC<Props> = ({ setOpenChatBox }) => {
  const handleCloseChatBox = (e: React.MouseEvent) => {
    setOpenChatBox(e);
  };

  return (
    <div
      style={{
        borderBottom: `1px solid ${colors["chatBox-bg-light"]}`,
        height: "20%",
        padding: "10px 1.25rem",
        backgroundColor: `${colors.border}`,
      }}
      className="w-full  border-b-2 flex items-center justify-between relative"
    >
      <div className="flex items-center">
        <div
          className="rounded-full relative"
          style={{ width: "60px", height: "60px" }}
        >
          <div
            style={{ width: "60px", height: "60px", overflow: "hidden" }}
            className="rounded-full overflow-hidden absolute"
          >
            <Image
              src="https://i.pinimg.com/564x/59/37/71/5937714ef4b2fa276c660d26052bbb1a.jpg"
              alt="dummy"
              fill
              className="w-full h-full object-contain"
            />
          </div>
          <div
            style={{
              width: "12px",
              height: "12px",
              position: "absolute",
              bottom: "0.1rem",
              right: "0.3rem",
              zIndex: 100,
              backgroundColor: "green",
              border: "2px solid white",
            }}
            className="w-3 h-3 rounded-full absolute z-50 bottom-0"
          ></div>
        </div>
        <div className="w-5 h-5"></div>
        <div className="flex flex-col justify-center">
          <h3 className="text-base font-bold">Shivam Rawat</h3>
          <p
            className="capitalize"
            style={{
              fontSize: "12px",
              transform: "translateY(-5px)",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            online
          </p>
        </div>
      </div>
      <RxCross2
        onClick={handleCloseChatBox}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Header;
