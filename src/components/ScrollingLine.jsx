"use client";

import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const ScrollingLine = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const fetchTiles = async () => {
      const res = await fetch("https://tiles-gallery-iota.vercel.app/data.json");

      const data = await res.json();
      setTiles(data);
    };

    fetchTiles();
  }, []);

  return (
    <div className="container mx-auto my-10">
      <Marquee className="bg-base-300 py-3" pauseOnHover={true} speed={80}>
        {tiles.slice(0, 4).map((t) => (
          <div key={t.id} className="mx-6 flex items-center gap-2">
            <span className="font-bold text-blue-800">New Arrivals:</span>

            <span className="font-semibold">{t.title}</span>

            <span>,</span>

            <span>{t.description}</span>

            <span className="font-bold">||</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ScrollingLine;
