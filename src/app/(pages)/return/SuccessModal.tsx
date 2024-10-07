"use client";
import { CircleCheckBig, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const SuccessModal: React.FC = ({ }) => {
  const searchParams = useSearchParams();
  const orderSuccess = searchParams.get("success");

  return (
    <div className="w-full h-screen overflow-clip flex items-center justify-center text-[#E0FF00]">
      <div className="w-[300px] md:h-[400px] md:w-[600px] shadow-lg border-[1px] border-[#E0FF00] flex flex-col items-center justify-start p-6 gap-8">
        <div className="flex flex-col items-center">
          {orderSuccess === "true" ? (
            <CircleCheckBig size={100} strokeWidth={0.6} color="#E0FF00" />
          ) : (
            <TriangleAlert size={100} strokeWidth={0.6} color="#E0FF00" />
          )}
          {/* <h2 className="text-lg">Hey {user?.username},</h2> */}
        </div>
        <div className="flex flex-col items-center text-center  w-[70%] gap-2">
          {orderSuccess === "true" ? (
            <h1 className="text-3xl">Your Order is Confirmed!</h1>
          ) : (
            <h1 className="text-3xl">Something went wrong!</h1>
          )}
          {orderSuccess === "true" ? (
            <p className="text-sm">
              We will send you a shipping confirmation email as soon as your
              order ships.
            </p>
          ) : (
            <p className="text-sm">
              We are looking into the error, we will send you a confirmation
              email as soon as possible.
            </p>
          )}
        </div>
        <Link
          href={"/"}
          className="bg-black rounded-full px-8 py-3 text-sm border border-[#E0FF00]"
        >
          Continue Playing
        </Link>
      </div>
    </div>
  );
};
