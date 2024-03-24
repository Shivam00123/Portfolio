"use client";

import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import { GenericObject } from "../../interfaces/types";

const Screen = ({ children }: { children: any }) => {
  const [coordinates, setCoordinates] = useState<GenericObject>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoordinates({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <RecoilRoot>
      <main className="w-screen flex min-h-screen flex-col items-center justify-between bg-main-blue">
        <div
          className="h-full pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{
            background: `radial-gradient(600px at ${coordinates.x}px ${coordinates.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        ></div>
        {children}
      </main>
    </RecoilRoot>
  );
};

export default Screen;
