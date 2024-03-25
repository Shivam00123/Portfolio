import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Resume = () => {
  const [mouseEntered, setMouseEntered] = useState(false);

  return (
    <a
      onMouseEnter={() => setMouseEntered(true)}
      onMouseLeave={() => setMouseEntered(false)}
      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
      href="/Resume"
      target="_blank"
    >
      <span>
        View Full Resume{" "}
        <span
          className={`inline-flex text-sm ml-1 -rotate-45 transition-all ${
            mouseEntered ? "hover-arrow" : "non-hover-arrow"
          }`}
        >
          <FaArrowRight />
        </span>
      </span>
    </a>
  );
};

export default Resume;
