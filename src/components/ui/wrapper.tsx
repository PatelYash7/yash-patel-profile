"use client";
import { MouseEvent, ReactNode, useRef } from "react";
import Circle  from "./Circle";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  const handleMouse = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    const mouse = mainRef.current;
    if (mouse) {
      setTimeout(() => {
        mouse.style.left = `${e.clientX}px`;
        mouse.style.top = `${e.pageY}px`;
      },0);
    }
  };
  const mainRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      className=" px-8 sm:mx-auto min-w-screen cursor-none min-h-screen flex justify-center"
      onMouseMove={handleMouse}
    >
      <Circle ref={mainRef} />
      {children}
    </div>
  );
};
