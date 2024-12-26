"use client";
import { MouseEvent, ReactNode, useRef } from "react";
import Circle from "./Circle";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  const handleMouse = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    const mouse = mainRef.current;
    if (mouse) {
      setTimeout(() => {
        mouse.style.left = `${e.clientX}px`;
        mouse.style.top = `${e.pageY}px`;
      }, 0);
    }
  };
  const mainRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      className="sm:mx-auto min-w-screen cursor-none min-h-screen flex flex-col items-center justify-center"
      onMouseMove={handleMouse}
    >
      <Circle ref={mainRef} />
      <div className="px-8">

      {children}
      </div>
      <div className=" w-full border-t-[0.01px] border-gray-700  text-gray-300">
        <div className="flex max-w-4xl mx-auto justify-center py-2 ">
          <p>yashpatel.tech@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
