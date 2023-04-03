import React, { forwardRef } from "react";
type Props = {
  scrollToCommunity: () => void;
  scrollToFeatures: () => void;
  scrollToSolution: () => void;
  menuToggleHandler: any;
  setIsopenHandler: any;
};
const MobileMenu = forwardRef<HTMLDivElement, Props>(
  (
    {
      scrollToCommunity,
      scrollToFeatures,
      scrollToSolution,
      menuToggleHandler,
      setIsopenHandler,
    },
    ref
  ) => {
    return (
      <div className=" flex-col  flex pt-[127px] gap-10  bg-[#00040F] w-full h-screen px-5 text-white text-xl ">
        <p
          className="hover:cursor-pointer"
          onClick={() => {
            menuToggleHandler(false);
            setIsopenHandler();
            setTimeout(() => {
              scrollToFeatures();
            }, 100);
          }}
        >
          {"Products & Features"}
        </p>
        <p
          className="hover:cursor-pointer "
          onClick={() => {
            menuToggleHandler(false);
            setIsopenHandler();
            setTimeout(() => {
              scrollToSolution();
            }, 100);
          }}
        >
          {" "}
          {"Problems Solved"}
        </p>
        <p
          className="hover:cursor-pointer"
          onClick={() => {
            menuToggleHandler(false);
            setIsopenHandler();
            setTimeout(() => {
              scrollToCommunity();
            }, 100);
          }}
        >
          {" "}
          {"Community"}
        </p>
      </div>
    );
  }
);

export default MobileMenu;
