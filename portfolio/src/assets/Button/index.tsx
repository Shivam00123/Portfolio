import React from "react";
import { colors } from "../../../config/colors";

interface Props {
  title: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  title,
  disabled = false,
  onClick = () => {},
}) => {
  console.log({ disabled });
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="submit"
      style={{
        padding: "10px 20px",
        backgroundColor: disabled ? colors.grey : colors.green,
        margin: "0px auto",
        color: "white",
        textTransform: "capitalize",
      }}
      className="text-sm w-fit rounded-md"
    >
      {title}
    </button>
  );
};

export default Button;
