import Image from "next/image";
import React from "react";
import TilesCard from "../TilesCard";

const getTiles = async () => {
  const res = await fetch("https://tiles-gallery-iota.vercel.app/data.json");
  return await res.json();
};

const FeaturesTiles = async () => {
  const tiles = await getTiles();
  // console.log(tiles);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold text-center">Featured Tiles</h1>
      <div className="grid grid-cols-4 gap-5 mt-3.5">
        {tiles.slice(0, 4).map((t) => (
          <TilesCard key={t.id} t={t} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesTiles;
