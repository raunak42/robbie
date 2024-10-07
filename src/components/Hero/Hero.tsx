"use client";
import { Header } from "../Header/Header";
import { Button } from "../Button/Button";
import { Dispatch, SetStateAction } from "react";
import { Controls } from "../Controls/Controls";
import { useScript } from "@uidotdev/usehooks";
import { BiLoader } from "react-icons/bi";

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
  const status = useScript(
    `https://prod.spline.design/UbPpaC5c8Ixgkqry/scene.splinecode`,
    {
      removeOnUnmount: false,
    }
  );

  // useEffect(() => {
  //   console.log(`status`, status);
  // }, [status]);

  return (
    <div className="w-screen h-screen relative z-10 bg-black">
      <script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js"
        async
      ></script>
      {status === "ready" ? (
        <spline-viewer url="https://prod.spline.design/UbPpaC5c8Ixgkqry/scene.splinecode"></spline-viewer>
      ) : (
        <div className="w-full h-screen flex justify-end">
          <div className="h-screen w-[50%] flex flex-col items-center justify-center gap-6 ">
            <BiLoader size={48} className="animate-spin" color="#E0FF00" />
            <h1 className="text-white">Loading 3D Model ...</h1>
          </div>
        </div>
      )}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* <IntroModal /> */}
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
        <Controls />
      </div>
    </div>
  );
};
