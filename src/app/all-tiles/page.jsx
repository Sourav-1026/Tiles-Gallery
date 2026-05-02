import SearchBar from "@/components/SearchBar";
import TilesCard from "@/components/TilesCard";

const AllTilesPage = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;
  const res = await fetch("https://tiles-gallery-iota.vercel.app/data.json");
  const tiles = await res.json();
  //   console.log(tiles, "from all tiles");

  const search = resolvedSearchParams?.search?.toLowerCase() || "";
  const filteredTiles = tiles.filter((t) => t.title?.toLowerCase().includes(search));

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold text-center">All Tiles</h1>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 md:px-0 mt-6">
        {filteredTiles.map((t) => (
          <TilesCard key={t.id} t={t} />
        ))}
      </div>
    </div>
  );
};

export default AllTilesPage;
