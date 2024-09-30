"use client";
import Spline from "@splinetool/react-spline/next";
import { Header } from "../Header/Header";
import IntroModal from "../Modal/Modal";

export const Hero: React.FC = () => {
  return (
    <div className="w-screen h-screen relative z-10 bg-black">
      <Spline scene="https://prod.spline.design/UbPpaC5c8Ixgkqry/scene.splinecode" />
      <div className="absolute top-0 h-full w-full bg-black bg-opacity-0 pointer-events-none ">
        <IntroModal/>
        <Header />
        <div className="  pl-20 flex flex-col items-center justify-start pt-[140px] w-[50%] ">
          <h1 className="text-7xl font-bold text-[#E0FF00]  uppercase">
            Meet Robbie, Your AI Companion
          </h1>
          <p className="text-white text-2xl mt-4">
            Experience the future of personal robotics with Robbie, your
            intelligent and versatile AI companion.
          </p>
        </div>
      </div>
    </div>
  );
};
