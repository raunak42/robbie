"use client";

import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  setFeaturesCLicked: Dispatch<SetStateAction<boolean>>;
  setPricingClicked: Dispatch<SetStateAction<boolean>>;
  setContactClicked: Dispatch<SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({
  setFeaturesCLicked,
  setContactClicked,
  setPricingClicked,
}) => {
  return (
    <div className="w-full h-[80px] py-8 px-10  flex items-center justify-between text-[#E0FF00]">
      <h1 className="text-4xl">BB.</h1>
      <div className="flex items-center justify-center gap-8 text-lg underline">
        <h1
          onClick={() => {
            setFeaturesCLicked(true);
          }}
          className="cursor-pointer"
        >
          Features
        </h1>
        <h1
          onClick={() => {
            setPricingClicked(true);
          }}
          className="cursor-pointer"
        >
          Pricing
        </h1>
        <h1
          onClick={() => {
            setContactClicked(true);
          }}
          className="cursor-pointer"
        >
          Contact
        </h1>{" "}
      </div>
    </div>
  );
};
