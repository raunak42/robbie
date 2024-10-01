import React from 'react';
import { LuBot, LuRocket, LuCpu } from "react-icons/lu";

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  isPopular?: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, price, features, icon, isPopular = false }) => (
  <div className={`bg-black border-2 ${isPopular ? 'border-[#E0FF00]' : 'border-gray-700'} rounded-xl px-6 py-12 flex flex-col ${isPopular ? 'transform scale-105' : ''}`}>
    <div className="flex items-center justify-between mb-4">
      <h3 className={`text-xl font-bold ${isPopular ? 'text-[#E0FF00]' : 'text-white'}`}>{title}</h3>
      {icon}
    </div>
    <div className="text-3xl font-bold text-white mb-6">{price}<span className="text-sm font-normal">/month</span></div>
    <ul className="space-y-3 mb-6 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <LuBot className="mr-2 text-[#E0FF00]" />
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-2 rounded-md font-bold transition-colors ${isPopular ? 'bg-[#E0FF00] text-black hover:bg-[#b3cc00]' : 'bg-gray-700 text-white hover:bg-gray-600'}`}>
      Choose Plan
    </button>
    {isPopular && (
      <div className="absolute top-0 right-0 bg-[#E0FF00] text-black font-bold py-1 px-3 rounded-bl-xl rounded-tr-lg text-sm">
        Most Popular
      </div>
    )}
  </div>
);

const Pricing: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">Choose Your Robbie Plan</h2>
        <p className="text-center text-gray-400 mb-12">Select the perfect plan to bring Robbie into your life</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PriceCard
            title="Basic"
            price="$29.99"
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
            price="$59.99"
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
            price="$99.99"
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