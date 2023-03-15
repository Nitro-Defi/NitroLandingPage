import React from "react";
import styles from "@/styles/Home.module.css";

import impLoss from "@/assets/jsonAssets/NitroFinance-Design-01.json";
import capEfficiency from "@/assets/jsonAssets/NitroFinance-Design-02-v2.json";

import elimination from "@/assets/jsonAssets/NitroFinance-Design-03-v1.json";
import Lottie from "lottie-react";

type Props = {};

const Body = (props: Props) => {
  return (
    <div className="  bg-[#00040F] w-full">
      <div className={styles.purpleBlob}></div>
      <div>
        <div className="md:flex pt-[250px]  justify-between px-5 md:px-[145px]">
          <div className="md:w-[517px] w-full">
            <h2 className="font-bold text-3xl md:text-5xl text-center md:text-start">
              {" "}
              Mitigation of impermanent loss
            </h2>
            <p className="mt-[24px] text-[#BEBEBE]">
              {
                "In Nitro Finance, liquidity providers benefit from the swap fee  and a variable fee structure in the event of borrowing, such as debt rollover, expired liquidation, and repayment events, which helps to mitigate impermanent loss."
              }
            </p>
          </div>
          <div className="md:-mt-32 mt-5">
            <Lottie animationData={impLoss} loop={true} />
          </div>
        </div>

        <div className="md:flex justify-between md:px-[145px] px-5 mt-20">
          <div className="md:block hidden -mt-32">
            <Lottie animationData={capEfficiency} loop={true} />
          </div>
          <div className="md:w-[486px] w-full mt-20">
            <h2 className="font-bold text-3xl md:text-5xl text-center md:text-start">
              {" "}
              Increase in capital efficiency
            </h2>
            <p className="mt-[24px] text-[#BEBEBE]">
              {
                "The platform's innovative AMM enables users to borrow, swap, and provide liquidity through a single AMM pool, increasing capital efficiency and reducing fragmentation."
              }
            </p>
          </div>
          <div className="md:hidden mt-5">
            <Lottie animationData={capEfficiency} loop={true} />
          </div>
        </div>

        <div className="md:flex  justify-between md:px-[145px] px-5 mt-32">
          <div className="md:w-[517px] w-full pl-5">
            <h2 className="font-bold text-3xl md:text-5xl text-center md:text-start">
              {" "}
              The Elimination Of Bad Debt
            </h2>
            <p className="mt-[24px] text-[#BEBEBE] ">
              {
                "             Nitro Finance features an automated liquidation process that helps to eliminate bad debt in the AMM pool by ensuring that positions are quickly and efficiently liquidated in the event of market price movement."
              }
            </p>
          </div>
          <div className="md:-mt-32 mt-5">
            <Lottie animationData={elimination} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
