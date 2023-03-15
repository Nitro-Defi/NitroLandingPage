import React from "react";

import styles from "@/styles/Home.module.css";

import { useLottie } from "lottie-react";
import frame from "@/assets/spinner.json";
type Props = {};

const Hero = (props: Props) => {
  const options = {
    animationData: frame,
    loop: true,
    autoplay: true,
  };

  const { View, setSpeed } = useLottie(options);
  setSpeed(0.5);

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

        <div className="hidden  md:block ">{View}</div>
      </div>
    </div>
  );
};

export default Hero;
