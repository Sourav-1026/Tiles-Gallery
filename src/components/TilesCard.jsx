import Image from "next/image";
import Link from "next/link";
import React from "react";

const TilesCard = ({ t }) => {
  return (
    <div key={t.id} className="card bg-base-100 shadow-sm  border border-gray-300">
      <div className="relative w-full aspect-square">
        <Image src={t.image} alt={t.title} fill className="object-cover rounded-xl p-3" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{t.title}</h2>
        <p>{t.description}</p>
        <div className="card-actions">
          <Link href={`/all-tiles/${t.id}`} className="btn w-full border border-[#1D9E75] bg-transparent text-[#1D9E75]">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TilesCard;
