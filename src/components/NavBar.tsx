import React, { forwardRef, useState } from "react";
import styles from "@/styles/Home.module.css";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
type Props = {
  scrollToCommunity: () => void;
  scrollToFeatures: () => void;
  scrollToSolution: () => void;
  menuToggleHandler: any;
  setIsopenHandler: any;
  isOpen: any;
};

const NavBar = forwardRef<HTMLDivElement, Props>(
  (
    {
      scrollToCommunity,
      scrollToFeatures,
      scrollToSolution,
      menuToggleHandler,

      isOpen,
      setIsopenHandler,
    },
    ref
  ) => {
    return (
      <div className="w-screen text-white  bg-[#00040F] h-[96px] top-0 fixed  z-[1000] ">
        <div className={`${styles.navbar} md:block hidden`}>
          <div className="h-[324px] w-[195px] bg-[#00FDEE] blur-[225px]   absolute"></div>
          <div className="flex justify-end">
            <div className={styles.glowBlue}></div>
          </div>

          <div className="flex h-full justify-between md:px-[66px] px-5 items-center">
            <div className="flex md:px-[22px] items-center">
              <Image
                src={logo}
                alt="logo"
                height="0"
                width="0"
                className="mr-[14px] h-[45px] w-[40px] "
              />
              <p>NITROFINANCE</p>
            </div>

            <div className="md:flex gap-10 px-[22px] hidden">
              <p
                className="hover:cursor-pointer hover:text-[#00FDEE]"
                onClick={scrollToFeatures}
              >
                {"Products & Features"}
              </p>

              <p
                className="hover:cursor-pointer hover:text-[#00FDEE]"
                onClick={scrollToSolution}
              >
                {"Problems Solved"}
              </p>

              <p
                className="hover:cursor-pointer hover:text-[#00FDEE]"
                onClick={scrollToCommunity}
              >
                Community
              </p>
            </div>
          </div>
        </div>
        {/*mobile navbar*/}
        <div className={` md:hidden pt-5 px-1`}>
          <div className="h-[104px] w-[195px] bg-[#00FDEE] blur-[225px]   absolute"></div>
          <div className="flex justify-end">
            <div className={styles.glowBlue}></div>
          </div>

          <div className="flex h-full justify-between md:px-[66px] px-5 items-center">
            <div className="flex md:px-[22px] items-center">
              <Image
                src={logo}
                alt="logo"
                height="0"
                width="0"
                className="mr-[14px] h-[45px] w-[40px] "
              />
              <p>NITROFINANCE</p>
            </div>
            {isOpen ? (
              <div
                className="text-3xl ease-in-out md:hidden "
                onClick={() => {
                  setIsopenHandler(false);
                  menuToggleHandler(false);
                }}
              >
                <IoMdClose />
              </div>
            ) : (
              <div
                className="text-3xl ease-in-out md:hidden"
                onClick={() => {
                  setIsopenHandler(true);
                  menuToggleHandler(true);
                }}
              >
                <HiMenu />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default NavBar;
