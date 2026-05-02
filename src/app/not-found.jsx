import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#1D9E75] via-cyan-700 to-black flex items-center justify-center px-6 relative overflow-hidden">
      {/* Blur Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="text-center text-white z-10 space-y-6">
        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-widest drop-shadow-lg">404</h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold">Lost In The Tiles?</h2>

        {/* Description */}
        <p className="max-w-xl mx-auto text-lg text-white/80">The page you are trying to visit does not exist or may have been removed.</p>

        {/* Button */}
        <Link href="/" className="inline-block bg-white text-[#1D9E75] font-semibold px-8 py-3 rounded-full hover:scale-105 hover:bg-gray-200 duration-300 shadow-2xl">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
