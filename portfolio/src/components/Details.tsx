"use client";

import Screen from "@/components/Screen";
import Image from "next/image";
import React, { useState } from "react";

import Loader from "./Loader";

const Details = ({ data }: { data: any }) => {
  const [hoveringOnImage, setHoveringOnImage] = useState<boolean>(false);

  const openLink = (link: string) => {
    if (!link) return;
    window.open(link, "_blank");
  };

  return (
    <Screen>
      {data ? (
        <div className="w-full h-full min-h-screen pb-20 relative">
          <h1 className="w-screen font-semibold lg:leading-6 text-font-white text-4xl text-center sticky top-0 pt-7 h-20 bg-main-blue z-50">
            {data?.title} {data?.company ? `. ${data.company}` : ""}{" "}
            {data?.location}
          </h1>
          <p
            className={`text-sm text-paragraph tracking-wide my-10 text-justify whitespace-pre-line px-10 lg:px-20 ${
              hoveringOnImage ? "reduceOpacity" : "normalOpacity"
            }`}
          >
            {`${data?.longDescription}`}
          </p>
          <h1
            style={{
              margin: "50px 0px 10px 0px",
            }}
            className={`text-2xl text-font-white font-bold px-10 lg:px-20 ${
              hoveringOnImage ? "reduceOpacity" : "normalOpacity"
            }`}
          >
            Key Contribution
          </h1>
          <div className="w-full h-full flex flex-col lg:flex-row items-start gap-10 lg:gap-0 px-10 lg:px-20">
            <ul
              style={{
                listStyleType: "disc",
                marginLeft: "12px",
              }}
              className={`text-paragraph text-sm list-disc lg:w-1/2 mr-10 ${
                hoveringOnImage ? "reduceOpacity" : "normalOpacity"
              }`}
            >
              {data?.points?.map((point: string, idx: any) => (
                <li key={idx} className="mb-5">
                  {point}
                </li>
              ))}
            </ul>

            {data?.image && (
              <div
                onClick={() => openLink(`${data?.link}`)}
                onMouseEnter={() => setHoveringOnImage(true)}
                onMouseLeave={() => setHoveringOnImage(false)}
                className={`w-full lg:w-1/2 h-fit min-h-72 z-40 relative ${
                  hoveringOnImage ? "image-hover-on block" : "image-hover-off"
                }`}
              >
                <Image
                  width={1000}
                  height={600}
                  src={`${data.image}`}
                  alt={`${data.image}`}
                  layout="responsive"
                />

                {data?.link && (
                  <div
                    className={`pointer-events-none absolute top-1/2 text-font-white rounded-sm overflow-hidden -z-10 w-fit h-fit bg-main-blue text-md font-bold px-3 py-2 text-center ${
                      hoveringOnImage
                        ? "link-text-on hidden lg:block"
                        : "link-text-off  hidden lg:block"
                    } block`}
                  >
                    <h1 className="text-font-white">
                      Click image to open website
                    </h1>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </Screen>
  );
};

export default Details;
