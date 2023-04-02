import React, { forwardRef, RefObject } from "react";
import { useLottie } from "lottie-react";
import symbol from "@/assets/symbol.json";

import styles from "@/styles/Home.module.css";
import { BsDiscord, BsMedium, BsTwitter } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import Link from "next/link";

type Props = {
  targetReCommunity: RefObject<HTMLDivElement>;
  scrollToTop: () => void;
};

const Goal = forwardRef<HTMLDivElement, Props>(
  ({ targetReCommunity, scrollToTop }, ref) => {
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
          <div className="md:-ml-64 -ml-[310px] hidden md:block  absolute z-1">
            {View}
          </div>

          <div className="flex w-full justify-center">
            <div className="flex flex-col mt-32  items-center w-[667px] gap-5">
              <p className={styles.ourGoal}>Our Goal</p>
              <p className="md:px-0 px-5 z-[900] text-center md:w-[700px] w-[380px]">
                {
                  "Nitro Finance aspires to revolutionize the DeFi landscape by merging the capabilities of a decentralized exchange (DEX) and a money market (MM) into a single, unified AMM pool. This groundbreaking approach enhances capital efficiency while catering to both token exchange and lending-borrowing needs with optimal effectiveness. Nitro Finance's ultimate goal is to drive financial innovation, accessibility, and inclusivity, propelling the DeFi ecosystem toward a future where decentralized finance empowers individuals globally."
                }
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
            <Link href="https://discord.gg/nitro-finance">
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
        <div className="flex justify-end px-10">
          <div
            className=" -mt-[60px] text-xl animate-bounce  w-10 h-10   md:w-[60px] md:h-[60px] hover:cursor-pointer px-1 py-1"
            onClick={scrollToTop}
          >
            <div className={styles.arrowBtnUp}>
              <AiOutlineArrowUp />
            </div>
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
