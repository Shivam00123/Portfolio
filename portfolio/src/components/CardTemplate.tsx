"use client";

import React, { ReactElement, useEffect, useRef, useState } from "react";
import { GenericObject } from "../../interfaces/types";
import Card from "./Card";
import { useRouter } from "next/navigation";

interface CardTemplateProps {
  title: string;
  id: string;
  menuTitle?: string;
  data: GenericObject[];
  showDate?: boolean;
  link?: boolean;
}

const CardTemplate: React.FC<CardTemplateProps> = ({
  title,
  id,
  data,
  showDate = false,
  link = true,
}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const router = useRouter();

  const handleCardClick = (obj: GenericObject) => {
    if (link) {
      router.push(`/${obj.id}/${obj.section}`);
    }
  };

  return (
    <>
      <div
        className="w-full h-fit mt-32 gap-10"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <h1 className="lg:hidden text-xl text-font-white font-bold mb-10">
          {title}
        </h1>
        <div id={id} className="hidden md:flex -translate-y-20"></div>
        {data.map((el: GenericObject) => (
          <Card
            isHovering={isHovering}
            item={el}
            key={el.id}
            menuTitle={id}
            showDate={showDate}
            handleCardClick={handleCardClick}
            link={link}
          />
        ))}
      </div>
    </>
  );
};

export default CardTemplate;
