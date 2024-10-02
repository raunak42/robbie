"use client";
// import Spline from "@splinetool/react-spline/next";
import { Header } from "../Header/Header";
import IntroModal from "../Modal/Modal";
import { Button } from "../Button/Button";
import { FaAnglesDown } from "react-icons/fa6";
import { Dispatch, SetStateAction } from "react";

interface HeroProps {
  setFeaturesCLicked: Dispatch<SetStateAction<boolean>>;
  setPricingClicked: Dispatch<SetStateAction<boolean>>;
  setContactClicked: Dispatch<SetStateAction<boolean>>;
}

export const Hero: React.FC<HeroProps> = ({
  setFeaturesCLicked,
  setContactClicked,
  setPricingClicked,
}) => {
  return (
    <div className="w-screen h-screen relative z-10 bg-black">
      {/* <Spline scene="https://prod.spline.design/UbPpaC5c8Ixgkqry/scene.splinecode" /> */}
      <div className="absolute top-0 h-full w-full bg-black bg-opacity-0 ">
        <IntroModal />
        <Header
          setFeaturesCLicked={setFeaturesCLicked}
          setPricingClicked={setPricingClicked}
          setContactClicked={setContactClicked}
        />
        <div className="  pl-20 flex flex-col items-start justify-start pt-[140px] w-[50%]">
          <h1 className="text-7xl font-bold text-[#E0FF00]  uppercase">
            Meet Robbie, Your AI Companion
          </h1>
          <p className="text-white text-2xl mt-4">
            Experience the future of personal robotics with Robbie, your
            intelligent and versatile AI companion.
          </p>
          <Button onClick={()=>setPricingClicked(true)} className="mt-8">Pre Order Now</Button>
        </div>
        <div className="w-full flex items-center justify-center">
          <FaAnglesDown className=" size-8  mt-[140px]" color="#ffffff" />
        </div>
      </div>
    </div>
  );
};
