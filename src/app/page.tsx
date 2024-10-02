"use client";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import Pricing from "@/components/Pricing/Pricing";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const [featuresClicked, setFeaturesCLicked] = useState<boolean>(false);
  const [pricingClicked, setPricingClicked] = useState<boolean>(false);
  const [contactClicked, setContactClicked] = useState<boolean>(false);

  useEffect(() => {
    if (featuresClicked && featuresRef.current) {
      featuresRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setFeaturesCLicked(false);
    }
    if (pricingClicked && pricingRef.current) {
      pricingRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setPricingClicked(false);
    }
    if (contactClicked && contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setContactClicked(false);
    }
  }, [featuresClicked, pricingClicked, contactClicked]);

  return (
    <div className="w-full h-full overflow-x-clip">
      <Hero
        setFeaturesCLicked={setFeaturesCLicked}
        setPricingClicked={setPricingClicked}
        setContactClicked={setContactClicked}
      />
      <div ref={featuresRef} className="h- w-screen bg-black">
        <Features setPricingClicked={setPricingClicked} />
      </div>
      <div ref={pricingRef} className="h-screen w-screen bg-black">
        <Pricing />
      </div>
      <div ref={contactRef} className="">
        <Footer/>
      </div>
    </div>
  );
}
