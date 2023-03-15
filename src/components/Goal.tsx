import React, { forwardRef, RefObject } from "react";
import { useLottie } from "lottie-react";
import symbol from "@/assets/symbol.json";

import styles from "@/styles/Home.module.css";
import { BsDiscord, BsMedium, BsTwitter } from "react-icons/bs";
import Link from "next/link";

type Props = {
  targetRefGoal: RefObject<HTMLDivElement>;
  targetReCommunity: RefObject<HTMLDivElement>;
};

const Goal = forwardRef<HTMLDivElement, Props>(
  ({ targetRefGoal, targetReCommunity }, ref) => {
    const options = {
      animationData: symbol,
      loop: true,
      autoplay: true,
    };

    const { View, setSpeed } = useLottie(options);
    setSpeed(0.5);
    return (
      <div className="min-h-screen bg-[#00040F] w-screen ">
        <div className=" ">
          <div className="-ml-64 hidden md:absolute z-1">{View}</div>
          <div className="-ml-[310px] md:hidden absolute z-1">{View}</div>
          <div className="flex w-full justify-center">
            <div
              className="flex flex-col mt-32  items-center w-[667px] gap-5"
              ref={targetRefGoal}
            >
              <p className={styles.ourGoal}>Our Goal</p>
              <p className="md:px-0 px-5 z-[900] text-center md:w-[700px] w-[380px]">
                Nitro Finance aims to provide a decentralized platform that
                combines the features of a decentralized exchange (DEX) and a
                money market. By doing so, Nitro Finance aims to create a
                flexible and versatile solution that enables users to
                participate in token exchange and lending-borrowing dynamics in
                a single AMM pool, providing a more seamless and efficient user
                experience. Additionally, Nitro Finance aims to play a part in
                making the ultimate goal of DeFi a reality.
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className={styles.bodyBlob}></div>
          </div>
        </div>
        <div
          className="flex flex-col px-20 md:px-0 items-center mt-[150px]"
          ref={targetReCommunity}
        >
          <p className={styles.ourGoal}>Join Our Community</p>

          <div className="flex text-2xl mt-10 gap-5 ">
            <Link href="">
              <div className={styles.icons}>
                <BsDiscord />
              </div>
            </Link>

            <Link href="https://twitter.com/NitroFinance">
              <div className={styles.icons}>
                <BsTwitter />
              </div>
            </Link>

            <Link href="">
              <div className={styles.icons}>
                <BsMedium />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-between  px-5 text-[10px] md:text-[15px] md:px-32 mt-32 pb-10">
          <p>Copyright © 2022 NitroFinance. All rights reserved.</p>
          <div className="flex gap-5">
            <p>Terms and Conditions </p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    );
  }
);

export default Goal;
