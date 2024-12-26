import { ForwardedRef, forwardRef } from "react";
const Circle = forwardRef(({}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      style={{ left: 0, right: 0 }}
      className={`absolute  h-8 z-10 w-8 border border-gray-300 hidden sm:flex justify-center items-center rounded-full`}
    >
        {/* <Dot className="h-8 w-8 text-white"/> */}
    </div>
  );
});
Circle.displayName = "Search";
export default Circle;