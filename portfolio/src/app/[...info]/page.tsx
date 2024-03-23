import Screen from "@/components/Screen";
import Image from "next/image";
import React from "react";
import dummy from "../../../public/images/dummy.png";

const Page = ({ params }: { params: any }) => {
  return (
    <Screen>
      <div className="w-full h-full min-h-screen py-10 px-10 lg:px-20">
        <h1 className="font-semibold lg:leading-6 text-font-white text-4xl text-center ">
          Software Engineer . Prosperasoft IND
        </h1>
        <p className="text-sm text-paragraph tracking-wide my-10 text-justify">
          {`At Continuum, I spearheaded User Interface (UI)
                          development, ensuring intuitive design and seamless
                          functionality. My role encompassed implementing new
                          features, resolving bugs, and enhancing code
                          readability for ease of maintenance. Notably, I
                          optimized performance by reducing unnecessary API
                          calls through strategic rendering fixes and debouncing
                          techniques, resulting in a significant 30-40%
                          improvement in app performance. Additionally, I
                          collaborated with backend developers, providing
                          support and resolving issues as needed. Moreover, I
                          implemented Login and Register functionality for
                          Single Sign-On (SSO) users, contributing to a
                          streamlined authentication process. My contributions
                          were pivotal in elevating Continuum's data systems
                          integration capabilities.`}
        </p>
        <h1
          style={{ margin: "50px 0px 10px 0px" }}
          className="text-2xl text-font-white font-bold"
        >
          Key Contribution
        </h1>
        <div className="w-full h-full flex flex-col lg:flex-row items-start gap-10 lg:gap-0">
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "12px",
            }}
            className="text-paragraph text-sm list-disc w-1/2"
          >
            <li>Creating User Interfaces was my responsibility.</li>
            <li> In charge of the app’s performance.</li>
          </ul>
          <div className="w-full lg:w-1/2 h-fit">
            <Image
              width={1000}
              height={600}
              src={dummy}
              alt="dummy"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default Page;
