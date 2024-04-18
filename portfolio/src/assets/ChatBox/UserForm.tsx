import React, { useState } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { useRecoilState } from "recoil";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import { userInfoSchema } from "../../../schemas";
import OTP from "./OTP";
import Button from "../Button";
import { userInfoState } from "../../../store/userInfo";
import { GenericObject } from "../../../interfaces/types";

interface Response {
  status: string;
  token: string;
  data: GenericObject;
}

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const UserForm = () => {
  const [showOTPPage, setShowOTPPage] = useState<boolean>(false);
  const [_, setState] = useRecoilState(userInfoState);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onSubmit = (
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    setState(values);
    actions.resetForm();
    createUser(values);
  };

  const createUser = async (values: typeof initialValues) => {
    const response: any = await fetch("http://localhost:8000/v1/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => {
        console.log("error");
        return;
      });
    console.log({ response });
    if (response?.status === "success") {
      setShowOTPPage(true);
    }
  };

  return (
    <>
      {showOTPPage ? (
        <OTP />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={userInfoSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form
              style={{
                height: "75%",
                padding: "5px 20px",
                overflow: "scroll",
                flexShrink: 0,
              }}
              className="w-full flex flex-col flex-shrink-0 px-10"
            >
              <p className="text-xs text-center font-bold mb-10">
                Please share your name and email. This is just to know who you
                are.
              </p>
              <div className="w-full h-20 flex flex-col mb-5">
                <label className="text-xs mb-2" htmlFor="username">
                  Username
                </label>
                <Field
                  name="username"
                  type="text"
                  className="border-none"
                  style={{
                    background: "transparent",
                    borderBottom: "1px solid black",
                    outline: "none",
                    fontSize: "14px",
                  }}
                />
                {errors?.username && touched?.username && (
                  <p style={{ fontSize: "10px", color: "red" }}>
                    {errors.username}
                  </p>
                )}
              </div>
              <div className="w-full h-20 flex flex-col">
                <label htmlFor="email" className="text-xs mb-2">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="border-none"
                  style={{
                    background: "transparent",
                    borderBottom: "1px solid black",
                    outline: "none",
                    fontSize: "14px",
                  }}
                />
                {errors?.email && touched?.email && (
                  <p style={{ fontSize: "10px", color: "red" }}>
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="w-full h-20 flex flex-col">
                <label htmlFor="email" className="text-xs mb-2">
                  Password
                </label>
                <div className="w-full h-fit flex items-center">
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="border-none relative w-full"
                    style={{
                      background: "transparent",
                      borderBottom: "1px solid black",
                      outline: "none",
                      fontSize: "14px",
                    }}
                  />
                  {showPassword ? (
                    <FaRegEye
                      style={{ width: "40px" }}
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <FaRegEyeSlash
                      style={{ width: "40px" }}
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
                {errors?.password && touched?.password && (
                  <p
                    style={{
                      fontSize: "10px",
                      color: "red",
                      lineHeight: 1.5,
                      marginTop: "10px",
                    }}
                  >
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="w-full h-5"></div>
              <Button title="submit" />
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default UserForm;
