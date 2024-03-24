import React, { useEffect, useRef, useState } from "react";
import { GenericObject } from "../../interfaces/types";
import { FaArrowRight } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import { useRecoilState } from "recoil";
import { menuState } from "../../store/store";
import Image from "next/image";

const Card = ({
  isHovering,
  item,
  menuTitle,
  showDate = false,
  handleCardClick,
  link,
}: {
  isHovering: boolean;
  item: GenericObject;
  menuTitle: string;
  showDate: boolean;
  handleCardClick: (obj: GenericObject) => void;
  link: boolean;
}) => {
  const [onHover, setOnHover] = useState<boolean>(false);
  const divRef = useRef(null);
  const [_, setSelectedMenu] = useRecoilState(menuState);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1, // 0.5 means when at least 50% of the target is visible
    };

    const handleIntersect = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelectedMenu(menuTitle);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [divRef, setSelectedMenu, menuTitle]);
  return (
    <div
      ref={divRef}
      onClick={() => handleCardClick({ id: item._id, section: menuTitle })}
      style={{
        opacity: isHovering ? (onHover ? "100%" : "50%") : "100%",
        cursor: link ? "pointer" : "default",
      }}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover:opacity-100 hover:opacity-100 mb-20 -lg:opacity-100"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-lg"></div>
      {showDate && (
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label={`${item.startdate} — ${
            item.enddate ? item.enddate : "Present"
          }`}
        >
          {new Date(item.startyear).getFullYear()} —{" "}
          {item.endyear ? new Date(item.endyear).getFullYear() : "Present"}
        </header>
      )}
      {item.image && (
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
          <div className="w-28 fit rounded-sm overflow-hidden box-border">
            <Image
              src={item?.image || "/images/dummy.png"}
              alt="dummy"
              width="112"
              height="80"
            />
          </div>
        </header>
      )}

      <div className="z-10 sm:col-span-6 hover:opacity-100">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <div
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
              rel="noreferrer noopener"
              aria-label="Creative Technologist Co-op at MullenLowe U.S. (opens in a new tab)"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {item.title} . {item.company}{" "}
                <span className="inline-block">{item.location}</span>
                {link && (
                  <span
                    className={`inline-flex text-sm ml-2 -rotate-45 transition-all ${
                      isHovering
                        ? onHover
                          ? "hover-arrow"
                          : "non-hover-arrow"
                        : "non-hover-arrow"
                    }`}
                  >
                    <FaArrowRight />
                  </span>
                )}
              </span>
            </div>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">{item.description}</p>
        {item?.likes && (
          <div className="w-full flex text-font-white items-center gap-2 my-2 text-sm font-bold">
            <TiStarFullOutline />
            {item.likes}
          </div>
        )}
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {item.techStack?.map((el: string) => (
            <li key={el} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                {el}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
