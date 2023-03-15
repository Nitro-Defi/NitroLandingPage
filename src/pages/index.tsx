import Head from "next/head";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { NavBar, Hero, Features, Body, Goal } from "../components";
import React, { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const targetRefGoal = useRef<HTMLDivElement>(null);
  const targetReCommunity = useRef<HTMLDivElement>(null);
  const targetRefAboutUs = useRef<HTMLDivElement>(null);
  const targetRefFeatures = useRef<HTMLDivElement>(null);

  const scrollToTargetGoal = () => {
    if (targetRefGoal.current) {
      window.scrollTo({
        top: targetRefGoal.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToTargetCommunity = () => {
    if (targetReCommunity.current) {
      window.scrollTo({
        top: targetReCommunity.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToTargetAboutUs = () => {
    if (targetRefAboutUs.current) {
      window.scrollTo({
        top: targetRefAboutUs.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToFeatures = () => {
    if (targetRefFeatures.current) {
      window.scrollTo({
        top: targetRefFeatures.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Head>
        <title>Nitro finance || The Duality Of An AMM </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-white bg-[#00040F] font-nova ">
        <div className={styles.nova}>
          <NavBar
            scrollToGoal={scrollToTargetGoal}
            scrollToCommunity={scrollToTargetCommunity}
            scrollToAboutUs={scrollToTargetAboutUs}
          />
          <Hero />
          <Features
            scrollToFeatures={scrollToFeatures}
            targetRefFeatures={targetRefFeatures}
          />
          <Body />
          <Goal
            targetRefGoal={targetRefGoal}
            targetReCommunity={targetReCommunity}
          />
        </div>
      </main>
    </>
  );
}
