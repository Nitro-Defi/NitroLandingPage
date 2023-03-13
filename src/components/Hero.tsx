import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import frame from "@/assets/frame.gif";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen w-full bg-[#00040F] text-white">
      <div className="flex justify-between items-center px-5 md:px-[137px] pt-[127px]">
        <div className="md:w-[644px] pt-[100px] w-full flex flex-col">
          <h1 className="font-[1000] md:text-[70px]  md:mt-0 text-5xl tracking-wider">
            THE DUAL FUNCTION AMM
          </h1>

          <p className="mt-5 pr-5">
            Nitro finance is cutting-edge defi protocol that integrates the
            functionality of an Automated Market Maker(AMM) with the ability to
            lend and borrow
          </p>
          <div className="flex gap-[32px] mt-[48px]">
            <button className={styles.btnLaunchApp}>Launch App</button>
            <button className={styles.readDocs}>Read Docs</button>{" "}
          </div>
        </div>
        <div className="hidden  md:block mt-[30px] ">
          <Image
            src={frame}
            alt="hero"
            height="0"
            width="0"
            className="w-[450px] h-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
