"use client";

import React, { useState } from "react";

const TextAnimation = ({ text }: { text: string }) => {
  const [color] = useState<string[]>([
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "cyan",
    "teal",
    "sky",
    "blue",
    "indigo",
    "violet",
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "cyan",
    "teal",
    "sky",
  ]);
  return (
    <span className="group/korok inline-flex lg:cursor-[url('/images/chrome.png'),_pointer] lg:font-medium lg:text-slate-200">
      <span className="sr-only">{text}</span>
      {text.split("")?.map((letter: string, idx) => (
        <span
          key={idx}
          className={`group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[${
            50 * (idx + 1)
          }ms]`}
          aria-hidden="true"
        >
          {letter === " " ? <>&nbsp;</> : letter}
        </span>
      ))}
      {/* <span aria-hidden="true">&nbsp;</span> */}
    </span>
  );
};

export default TextAnimation;
