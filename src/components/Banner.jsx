import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="text-center container mx-auto my-10 bg-red-500 py-20 space-y-20">
      <h1 className="text-5xl font-bold">Discover Your Perfect Aesthetic</h1>
      <Link href={"/all-tiles"} className="btn bg-[#1D9E75] text-white">
        Browse Now
      </Link>
    </div>
  );
};

export default Banner;
