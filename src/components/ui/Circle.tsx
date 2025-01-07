import { ForwardedRef, forwardRef } from "react";
const Circle = forwardRef(({}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      className={`absolute left-0 top-0  h-8  z-10 w-8 border border-gray-300 hidden sm:flex justify-center items-center rounded-full`}
    >
    </div>
  );
});
Circle.displayName = "Search";
export default Circle;