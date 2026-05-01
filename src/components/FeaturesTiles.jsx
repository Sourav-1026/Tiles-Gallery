import React from "react";

const getTiles = async () => {
  // const res = await fetch("/data.json");
  // return await res.json();
};

const FeaturesTiles = async () => {
  const tiles = await getTiles();
  console.log(tiles);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold text-center">Featured Tiles</h1>
    </div>
  );
};

export default FeaturesTiles;
