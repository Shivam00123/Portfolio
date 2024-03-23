"use client";

import React, { useEffect, useRef } from "react";
import TextAnimation from "./TextAnimation";
import { useRecoilState } from "recoil";
import { menuState } from "../../store/store";

const About = () => {
  const aboutRef = useRef(null);
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
          setSelectedMenu("about");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [aboutRef, setSelectedMenu]);
  return (
    <>
      <div ref={aboutRef} id="about" className=" -mt-20 mb-20"></div>
      <h1 className="lg:hidden text-xl text-font-white font-bold mb-10">
        About
      </h1>
      <p className="mb-4">
        Since 2021, I embarked on a journey into the captivating world of coding
        and programming, driven by a fascination for creating websites and
        mobile applications. Witnessing how these technologies streamline our
        lives while igniting curiosity, I became deeply engaged in understanding
        their inner workings.
      </p>
      <p className="mb-4">
        Over the past two years, I have dedicated myself to crafting and
        maintaining websites, honing my skills in{" "}
        <span className="group/korok inline-flex lg:cursor-[url('../../public/images/chrome.png'),_pointer] lg:font-medium lg:text-slate-200">
          <span className="sr-only">web development</span>
          <span
            className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
            aria-hidden="true"
          >
            w
          </span>
          <span
            className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
            aria-hidden="true"
          >
            e
          </span>
          <span
            className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
            aria-hidden="true"
          >
            b
          </span>
          <span
            className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
            aria-hidden="true"
          >
            &nbsp;
          </span>
          <span
            className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
            aria-hidden="true"
          >
            d
          </span>
          <span
            className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
            aria-hidden="true"
          >
            e
          </span>

          <span
            className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
            aria-hidden="true"
          >
            v
          </span>
          <span
            className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]"
            aria-hidden="true"
          >
            e
          </span>
          <span
            className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]"
            aria-hidden="true"
          >
            l
          </span>
          <span
            className="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]"
            aria-hidden="true"
          >
            o
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            p
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            m
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            e
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            n
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            t
          </span>
        </span>
        . However, my recent focus has shifted towards{" "}
        <span className="group/korok inline-flex lg:cursor-[url('../../public/images/chrome.png'),_pointer] lg:font-medium lg:text-slate-200">
          <span className="sr-only">mobile application</span>
          <span
            className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
            aria-hidden="true"
          >
            m
          </span>
          <span
            className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
            aria-hidden="true"
          >
            o
          </span>
          <span
            className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
            aria-hidden="true"
          >
            b
          </span>

          <span
            className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
            aria-hidden="true"
          >
            i
          </span>
          <span
            className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
            aria-hidden="true"
          >
            l
          </span>

          <span
            className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
            aria-hidden="true"
          >
            e
          </span>
          <span
            className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
            aria-hidden="true"
          >
            &nbsp;
          </span>
          <span
            className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]"
            aria-hidden="true"
          >
            a
          </span>
          <span
            className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]"
            aria-hidden="true"
          >
            p
          </span>
          <span
            className="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]"
            aria-hidden="true"
          >
            p
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            l
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            i
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            c
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            a
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            t
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            i
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            o
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            n
          </span>
        </span>
        development and{" "}
        <span className="group/korok inline-flex lg:cursor-[url('../../public/images/chrome.png'),_pointer] lg:font-medium lg:text-slate-200">
          <span className="sr-only">backend services</span>
          <span
            className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
            aria-hidden="true"
          >
            b
          </span>
          <span
            className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
            aria-hidden="true"
          >
            a
          </span>
          <span
            className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
            aria-hidden="true"
          >
            c
          </span>

          <span
            className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
            aria-hidden="true"
          >
            k
          </span>
          <span
            className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
            aria-hidden="true"
          >
            e
          </span>

          <span
            className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
            aria-hidden="true"
          >
            n
          </span>
          <span
            className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
            aria-hidden="true"
          >
            d
          </span>
          <span
            className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
            aria-hidden="true"
          >
            &nbsp;
          </span>

          <span
            className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]"
            aria-hidden="true"
          >
            s
          </span>
          <span
            className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]"
            aria-hidden="true"
          >
            e
          </span>
          <span
            className="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]"
            aria-hidden="true"
          >
            r
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            v
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            i
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            c
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            e
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            s
          </span>
        </span>
        . Venturing into new territories, I strive to expand my expertise,
        embracing the challenges and complexities that come with it.
      </p>
      <p className="mb-4">
        During my free time, I delve into the realm of{" "}
        <span className="group/korok inline-flex lg:cursor-[url('../../public/images/chrome.png'),_pointer] lg:font-medium lg:text-slate-200">
          <span className="sr-only">DevOps</span>
          <span
            className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
            aria-hidden="true"
          >
            D
          </span>
          <span
            className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
            aria-hidden="true"
          >
            e
          </span>
          <span
            className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
            aria-hidden="true"
          >
            v
          </span>

          <span
            className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
            aria-hidden="true"
          >
            O
          </span>
          <span
            className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
            aria-hidden="true"
          >
            p
          </span>

          <span
            className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
            aria-hidden="true"
          >
            s
          </span>
        </span>
        , where I explore the transformation of my projects into{" "}
        <span className="group/korok inline-flex lg:cursor-[url('../../public/images/chrome.png'),_pointer] lg:font-medium lg:text-slate-200">
          <span className="sr-only">Docker</span>
          <span
            className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
            aria-hidden="true"
          >
            D
          </span>
          <span
            className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
            aria-hidden="true"
          >
            o
          </span>
          <span
            className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
            aria-hidden="true"
          >
            c
          </span>

          <span
            className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
            aria-hidden="true"
          >
            k
          </span>
          <span
            className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
            aria-hidden="true"
          >
            e
          </span>

          <span
            className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
            aria-hidden="true"
          >
            r
          </span>
          <span
            className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
            aria-hidden="true"
          >
            &nbsp;
          </span>
        </span>
        containers, embracing the evolving landscape of technology. Each
        encounter with new changes becomes an opportunity for learning and
        growth, enriching my understanding of the field.
      </p>
      <p className="mb-4">
        Away from the screen, I find solace in traveling, immersing myself in
        new experiences, or indulging in the simple pleasure of sleep, a
        cherished pastime that rejuvenates my mind and fuels my passion for the
        digital realm.
      </p>
    </>
  );
};

export default About;
