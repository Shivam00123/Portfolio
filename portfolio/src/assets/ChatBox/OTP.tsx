import React, { useRef, useState } from "react";
import Button from "../Button";
import { colors } from "../../../config/colors";
import { useRecoilState } from "recoil";
import { authState } from "../../../store/auth";

const OTP = () => {
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [_, setState] = useRecoilState(authState);

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1 || isNaN(Number(value))) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input box
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleInputBackspace = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = async () => {
    const OTP = otp.join("");
    const response: any = await fetch(
      "http://localhost:8000/v1/user/verifyOTP",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ OTP }),
      }
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => {
        console.log("error");
        return;
      });
    if (response?.status === "success") {
      setState(true);
    }
  };

  return (
    <div
      style={{
        height: "75%",
        padding: "5px 20px",
        overflow: "scroll",
        flexShrink: 0,
      }}
      className="w-full flex flex-col flex-shrink-0 px-10"
    >
      <p className="text-xs text-center font-bold mb-10">
        Kindly enter the OTP to verify the authenticity of the provided email
        address.
      </p>
      <div className="w-full h-fit flex justify-center items-center mb-10">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(ref) => {
              inputRefs.current[index] = ref as HTMLInputElement;
            }}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleInputBackspace(index, e)}
            style={{
              width: "40px",
              height: "40px",
              margin: "5px",
              textAlign: "center",
              backgroundColor: "#0f172a",
              color: colors.pureWhite,
              border: "none",
              borderRadius: "5px",
            }}
          />
        ))}
      </div>
      <Button
        onClick={handleVerify}
        title="Verify"
        disabled={otp.join("").trim().length !== 4}
      />
    </div>
  );
};

export default OTP;
