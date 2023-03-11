import React, { forwardRef, RefObject, useState } from "react";
import styles from "@/styles/Home.module.css";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
type Props = {
  scrollToGoal: () => void;
  scrollToCommunity: () => void;
  scrollToAboutUs: () => void;
};

const NavBar = forwardRef<HTMLDivElement, Props>(
  ({ scrollToGoal, scrollToCommunity, scrollToAboutUs }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="w-screen text-white  bg-[#00040F] h-[96px] top-0 fixed  z-[1000] ">
        <div className={styles.navbar}>
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
            {isOpen ? (
              <div
                className="text-5xl ease-in-out md:hidden "
                onClick={() => setIsOpen(false)}
              >
                <IoMdClose />
              </div>
            ) : (
              <div
                className="text-5xl ease-in-out md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <BiMenuAltRight />
              </div>
            )}

            <div className="md:flex gap-10 px-[22px] hidden">
              <p className="hover:cursor-pointer" onClick={scrollToGoal}>
                Goals
              </p>
              <p className="hover:cursor-pointer" onClick={scrollToCommunity}>
                Community
              </p>
              <p className="hover:cursor-pointer" onClick={scrollToAboutUs}>
                About Us
              </p>
            </div>
          </div>
          <div className="md:hidden flex justify-between h-20 rounded-md  ">
            <div></div>
            {isOpen && (
              <div className="flex ease-in-out flex-col text-xl space-y-5 text-black pt-5 font-bold items-center w-32 h-[200px] rounded-md  bg-gradient-to-r from-indigo-500">
                <p className="hover:cursor-pointer" onClick={scrollToGoal}>
                  Goals
                </p>
                <p className="hover:cursor-pointer" onClick={scrollToCommunity}>
                  Community
                </p>
                <p className="hover:cursor-pointer" onClick={scrollToAboutUs}>
                  About Us
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default NavBar;
