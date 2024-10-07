import React from 'react';
import { LuBot, LuRocket, LuCpu } from "react-icons/lu";
import { PriceCard } from './PriceCard';

const Pricing: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">Choose Your Robbie Plan</h2>
        <p className="text-center text-gray-400 mb-12">Select the perfect plan to bring Robbie into your life</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 sm:px-24 md:px-4 lg:px-0">
          <PriceCard
            title="Basic"
            price="29.99"
            features={[
              "Basic AI functionality",
              "Voice commands",
              "Mobile app control",
              "Weekly updates"
            ]}
            icon={<LuCpu className="text-3xl text-gray-400" />}
          />
          <PriceCard
            title="Pro"
            price="59.99"
            features={[
              "Advanced AI capabilities",
              "Customizable personality",
              "Smart home integration",
              "Priority support",
              "Daily updates"
            ]}
            icon={<LuRocket className="text-3xl text-[#E0FF00]" />}
            isPopular={true}
          />
          <PriceCard
            title="Enterprise"
            price="99.99"
            features={[
              "Full AI ecosystem",
              "Multiple Robbie units",
              "API access",
              "24/7 premium support",
              "Custom feature development"
            ]}
            icon={<LuBot className="text-3xl text-gray-400" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;