import React, { useState } from "react";
import { colors } from "../../../config/colors";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { userInfoSchema } from "../../../schemas";
import OTP from "./OTP";
import Button from "../Button";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../store/userInfo";

const initialValues = {
  username: "",
  email: "",
};

const UserForm = () => {
  const [showOTPPage, setShowOTPPage] = useState<boolean>(false);
  const [_, setState] = useRecoilState(userInfoState);
  const onSubmit = (
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    setState(values);
    actions.resetForm();
    setShowOTPPage(true);
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
              <Button title="submit" />
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default UserForm;
