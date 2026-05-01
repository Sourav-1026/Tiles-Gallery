import Image from "next/image";
import React from "react";

const getTiles = async () => {
  const res = await fetch("https://tiles-gallery-iota.vercel.app/data.json");
  return await res.json();
};

const FeaturesTiles = async () => {
  const tiles = await getTiles();
  console.log(tiles);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold text-center">Featured Tiles</h1>
      <div className="grid grid-cols-3 gap-5 mt-3.5">
        {tiles.map((t) => (
          <div key={t.id} className="card bg-base-100  shadow-sm">
            <figure>
              <Image src={t.image} alt={t.title} width={300} height={300} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{t.tile}</h2>
              <p>{t.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesTiles;
