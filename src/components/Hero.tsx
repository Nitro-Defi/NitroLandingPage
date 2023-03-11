import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import frame from "@/assets/frame.gif";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen w-full bg-[#00040F] text-white">
      <div className="flex justify-between px-5 md:px-[137px] pt-[127px]">
        <div className="md:w-[644px] pt-[100px] w-full flex flex-col">
          <h1 className="font-bold md:text-[70px]  md:mt-0 text-5xl tracking-wider">
            THE DUAL FUNCTION AMM
          </h1>

          <p className="mt-5 md:mt-0">
            Nitro finance is cutting-edge defi protocol that integrates the
            functionality of an Automated Market Maker(AMM) with the ability to
            lend and borrow
          </p>
          <div className="flex gap-[32px] mt-[48px]">
            <button className={styles.btnLaunchApp}>Launch App</button>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-[157px] h-[49px] rounded-[5px] px-[0.8px] py-[0.8px]">
              <button className="w-full h-full bg-[#00040F] rounded-[5px] ">
                Read Docs
              </button>{" "}
            </div>
          </div>
        </div>
        <div className="hidden md:block pt-[60px]">
          <Image
            src={frame}
            alt="hero"
            height="0"
            width="0"
            className="w-96 h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
