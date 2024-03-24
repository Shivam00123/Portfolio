"use client";

import Screen from "@/components/Screen";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import dummy from "../../public/images/project.png";
import axios from "axios";
import { notFound } from "next/navigation";
import { GenericObject } from "../../interfaces/types";

const Details = ({ params }: { params: any }) => {
  const [id, section] = params.info;
  const [data, setData] = useState<GenericObject | null>(null);
  const [hoveringOnImage, setHoveringOnImage] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      let collectionName;
      switch (decodeURIComponent(section)) {
        case "company projects":
          collectionName = "companyprojects";
          break;
        case "personal projects":
          collectionName = "personalProjects";
          break;
        default:
          return notFound();
      }
      const response = await axios.get(`/api/v1/${collectionName}/${id}`);

      setData(response.data.data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <p className="text-sm text-paragraph tracking-wide my-10 text-justify whitespace-pre-line px-10 lg:px-20">
            {`${data?.longDescription}`}
          </p>
          <h1
            style={{ margin: "50px 0px 10px 0px" }}
            className="text-2xl text-font-white font-bold px-10 lg:px-20"
          >
            Key Contribution
          </h1>
          <div className="w-full h-full flex flex-col lg:flex-row items-start gap-10 lg:gap-0 px-10 lg:px-20">
            <ul
              style={{
                listStyleType: "disc",
                marginLeft: "12px",
              }}
              className="text-paragraph text-sm list-disc lg:w-1/2 mr-10"
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
                className={`w-full lg:w-1/2 h-fit z-40 relative ${
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
                {hoveringOnImage && data?.link && (
                  <div className="absolute bottom-0 left-0 text-font-white z-50 w-fit h-6 bg-main-blue text-[8px] font-bold p-2 rounded-tr-lg  text-center grid place-items-center">
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
        <h1>Loading...</h1>
      )}
    </Screen>
  );
};

export default Details;
