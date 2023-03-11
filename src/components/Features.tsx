import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import first from "@/assets/first.png";
import second from "@/assets/liquidity.png";
import third from "@/assets/binorder.png";
import forth from "@/assets/mechanics.png";
import fifth from "@/assets/star.png";
type Props = {};

const Features = (props: Props) => {
  return (
    <div className="bg-[#00040F] pb-20 md:pb-0 md:h-screen w-full text-white">
      <div className="flex justify-end w-full  ">
        {" "}
        <div className=" flex justify-end">
          <div className={styles.features}></div>
        </div>
      </div>
      <div className="flex justify-center px-5 md:px-0 ">
        <p className="text-5xl font-bold -mt-32">Products And Features</p>
      </div>
      <div className="flex flex-row flex-wrap gap-5 justify-center px-7 md:px-[130px] ">
        <div className="w-[368px] h-[250px] rounded-[20px] bg-[#061727] hover:cursor-pointer hover:-translate-y-5 transform transition duration-500 ">
          <div className="flex flex-col items-center mt-10 px-10">
            <Image src={first} alt="" height="0" width="0" className="" />
            <p className="text-xl font-bold pt-2">Dual Function AMM</p>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Nitro Finance's AMM acts as both a money market and a DEX,
              allowing for unparalleled flexibility and efficiency in
              decentralized trading.
            </p>
          </div>
        </div>
        <div className="w-[368px] md:h-[250px] h-[300px]  rounded-[20px] bg-[#061727] hover:cursor-pointer hover:-translate-y-5 transform transition duration-500 ">
          <div className="flex flex-col items-center mt-10 px-10">
            <Image src={second} alt="" height="0" width="0" className="" />
            <p className="text-xl font-bold pt-2">Concentrated Liquidity</p>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Nitro Finance's bin mechanism allows for concentrated liquidity,
              enabling traders to deposit assets into specific price ranges
              (bins) to improve market efficiency.
            </p>
          </div>
        </div>
        <div className="w-[368px] md:h-[250px] h-[300px]  rounded-[20px] bg-[#061727] hover:cursor-pointer hover:-translate-y-5 transform transition duration-500 ">
          <div className="flex flex-col items-center mt-10 px-10">
            <Image src={third} alt="" height="0" width="0" className="" />
            <p className="text-xl font-bold pt-2"> Bin Order</p>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Nitro Finance's bin order functionality allows all types of limit
              orders to be placed directly within a specific bin, providing
              traders greater control over their trades.
            </p>
          </div>
        </div>
        <div className="w-[368px] mt-5 md:h-[250px] h-[300px] rounded-[20px] bg-[#061727] hover:cursor-pointer hover:-translate-y-5 transform transition duration-500 ">
          <div className="flex flex-col items-center mt-10 px-10">
            <Image src={forth} alt="" height="0" width="0" className="" />
            <p className="text-[18px] font-bold text-center pt-2">
              {" "}
              Innovative Liquidation mechanics
            </p>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Nitro Finance's innovative liquidation mechanics allow for an
              active debt management system, ensuring that the protocol remains
              solvent and eliminating the risk of bad debt for users.
            </p>
          </div>
        </div>
        <div className="w-[368px] mt-5 md:h-[250px] h-[300px]  rounded-[20px] bg-[#061727] hover:cursor-pointer hover:-translate-y-5 transform transition duration-500 ">
          <div className="flex flex-col items-center mt-10 px-10">
            <Image src={fifth} alt="" height="0" width="0" className="" />
            <p className="text-xl font-bold pt-2"> Nitro Point system</p>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Nitro Finance's Nitro Point system allows phenomenal growth
              without dilution in value. and provides a sustainable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
