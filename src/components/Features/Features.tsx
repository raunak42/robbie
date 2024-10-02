"use client";
import React, { Dispatch, SetStateAction } from "react";
import {
  LuBrain,
  LuVolume2,
  LuHome,
  LuCalendar,
  LuShield,
  LuZap,
} from "react-icons/lu";
import { Button } from "../Button/Button";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="border-2 border-[#E0FF00] p-6 hover:bg-[#E0FF00] hover:text-black transition-colors group">
    <div className="text-4xl mb-4 text-[#E0FF00] group-hover:text-black">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 group-hover:text-gray-800">{description}</p>
  </div>
);

interface HeroProps {
  setPricingClicked: Dispatch<SetStateAction<boolean>>;
}

const Features: React.FC<HeroProps> = ({ setPricingClicked }) => {
  const features = [
    {
      icon: <LuBrain />,
      title: "Advanced AI",
      description:
        "Robbie's cutting-edge AI adapts to your needs and learns from interactions.",
    },
    {
      icon: <LuVolume2 />,
      title: "Voice Recognition",
      description:
        "Communicate naturally with Robbie using advanced voice recognition technology.",
    },
    {
      icon: <LuHome />,
      title: "Smart Home Integration",
      description:
        "Seamlessly connect Robbie with your smart home devices for ultimate control.",
    },
    {
      icon: <LuCalendar />,
      title: "Scheduling Assistant",
      description:
        "Let Robbie manage your calendar and optimize your daily routine.",
    },
    {
      icon: <LuShield />,
      title: "Enhanced Security",
      description:
        "Robbie provides an extra layer of security for your home and digital life.",
    },
    {
      icon: <LuZap />,
      title: "Energy Efficient",
      description:
        "Designed with sustainability in mind, Robbie optimizes energy consumption.",
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-4">
      <div className="w-full mx-auto px-16">
        <h2 className="text-4xl font-bold text-center mb-2">
          Robbie&apos;s Features
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Discover what makes Robbie your ultimate AI companion
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
        <div className="mt-16 text-center w-full flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold mb-4">
            Experience the Future with Robbie
          </h3>
          <Button onClick={() => setPricingClicked(true)}>
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Features;
