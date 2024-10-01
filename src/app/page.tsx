import { Hero } from "@/components/Hero/Hero";
import Pricing from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <div className="w-full h-full overflow-x-clip">
      <Hero />
      <div className="h-screen w-screen bg-black" >
        <Pricing/>
      </div>
    </div>
  );
}
