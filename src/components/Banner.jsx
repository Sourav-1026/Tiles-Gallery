import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="px-5 md:px-0">
      <div className="text-center container mx-auto my-10 bg-linear-to-br from-[#1D9E75] via-cyan-600 to-black py-20 space-y-20 rounded-2xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          <span className="text-black">Discover</span> Your Perfect <span className="text-blue-950">Aesthetic</span>
        </h1>

        <Link href={"/all-tiles"} className="btn bg-white text-[#1D9E75] hover:bg-gray-200 border-none]">
          Browse Now <FaArrowRight className="text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
