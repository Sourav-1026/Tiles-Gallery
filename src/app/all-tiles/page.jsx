import TilesCard from "@/components/TilesCard";

const AllTilesPage = async () => {
  const res = await fetch("https://tiles-gallery-iota.vercel.app/data.json");
  const tiles = await res.json();
  //   console.log(tiles, "from all tiles");
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold text-center">All Tiles</h1>
      <div className="grid grid-cols-4 gap-5 mt-6">
        {tiles.map((t) => (
          <TilesCard key={t.id} t={t} />
        ))}
      </div>
    </div>
  );
};

export default AllTilesPage;
