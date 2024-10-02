import { Header } from "../Header/Header";
import IntroModal from "../Modal/Modal";
import { Button } from "../Button/Button";
import { FaAnglesDown } from "react-icons/fa6";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

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
      <script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js"
        async
      ></script>
      <spline-viewer
        loading-anim-type="spinner-small-light"
        url="https://prod.spline.design/UbPpaC5c8Ixgkqry/scene.splinecode"
      >
        <div className="h-screen w-screen">
          <Image
            src="data:image/png;base64,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"
            alt="Spline preview"
            style={{
              height:"100%",
              width:"100%"
            }}
            height={100}
            width={100}
          />
        </div>
      </spline-viewer>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <IntroModal />
        <div className="pointer-events-auto">
          <Header
            setFeaturesCLicked={setFeaturesCLicked}
            setPricingClicked={setPricingClicked}
            setContactClicked={setContactClicked}
          />
        </div>
        <div className="text-center md:text-left px-8 md:px-20 flex flex-col items-center  md:items-start justify-start pt-[140px] md:w-[50%] ">
          <h1 className="text-4xl md:text-7xl font-bold text-[#E0FF00] uppercase">
            Meet Robbie, Your AI Companion
          </h1>
          <p className="text-white text-base md:text-2xl mt-4">
            Experience the future of personal robotics with Robbie, your
            intelligent and versatile AI companion.
          </p>
          <div className="pointer-events-auto">
            <Button onClick={() => setPricingClicked(true)} className="mt-8">
              Pre Order Now
            </Button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <FaAnglesDown className="size-8 mt-[110px]" color="#ffffff" />
        </div>
      </div>
    </div>
  );
};
