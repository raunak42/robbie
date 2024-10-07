"use client";
import { LuBot } from "react-icons/lu";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { BodyType } from "@/app/api/checkoutSession/route";
import { BASE_URL } from "@/app/lib/constants";
import { useState } from "react";
import { BiLoader } from "react-icons/bi";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  isPopular?: boolean;
}

export const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  features,
  icon,
  isPopular = false,
}) => {
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const router = useRouter();

  const body: BodyType = {
    features,
    price,
    title,
  };

  const handleCheckout = async () => {
    setShowSpinner(true);
    const response = await fetch(`${BASE_URL}/api/checkoutSession`, {
      method: "POST",
      body: JSON.stringify(body),
      cache: "no-store",
    });

    if (response.ok) {
      const redirectUrl = await response.json();
      router.push(redirectUrl);
    }
  };

  return (
    <div
      className={`bg-black border-2 ${
        isPopular ? "border-[#E0FF00]" : "border-gray-700"
      } rounded-none px-6 py-12 flex flex-col ${
        isPopular ? "transform scale-105" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3
          className={`text-xl font-bold ${
            isPopular ? "text-[#E0FF00]" : "text-white"
          }`}
        >
          {title}
        </h3>
        {icon}
      </div>
      <div className="text-3xl font-bold text-white mb-6">
        ${price}
        <span className="text-sm font-normal">/month</span>
      </div>
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <LuBot className="mr-2 text-[#E0FF00]" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        disabled={showSpinner && true}
        onClick={handleCheckout}
        className={`w-full h-[40px] py-2 rounded-none font-bold transition-colors flex items-center justify-center ${
          isPopular
            ? "bg-[#E0FF00] text-black hover:bg-[#b3cc00]"
            : "bg-gray-700 text-white hover:bg-gray-600"
        }`}
      >
        {showSpinner ? (
          <BiLoader className="animate-spin" size={28} />
        ) : (
          <h1>Choose plan</h1>
        )}
      </button>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-[#E0FF00] text-black font-bold py-1 px-3 rounded-bl-xl  text-sm">
          Most Popular
        </div>
      )}
    </div>
  );
};
