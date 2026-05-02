import Image from "next/image";

const TilesDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://tiles-gallery-iota.vercel.app/data.json");
  const tiles = await res.json();
  console.log(tiles, "from details-page");

  const expectedTiles = tiles.find((t) => t.id == id);
  console.log(expectedTiles);

  return (
    <div className="container mx-auto px-4 my-10">
      <div className="flex flex-col md:flex-row gap-8 items-start shadow-md rounded-md border border-gray-300">
        {/* Left Side Image */}
        <div className="relative w-full md:w-1/2 aspect-square p-5">
          <Image src={expectedTiles.image} alt={expectedTiles.title} width={400} height={400} unoptimized className="object-cover w-full h-full rounded-lg" />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 text-left space-y-3 p-5">
          <h2 className="text-2xl font-bold">{expectedTiles.title}</h2>

          <p className="text-gray-600">{expectedTiles.description}</p>

          <p>
            <span className="font-semibold">Category:</span> {expectedTiles.category}
          </p>

          <p>
            <span className="font-semibold">Price:</span> {expectedTiles.price} {expectedTiles.currency}
          </p>

          <p>
            <span className="font-semibold">Dimensions:</span> {expectedTiles.dimensions}
          </p>

          <p>
            <span className="font-semibold">Stock:</span> {expectedTiles.inStock ? "Available " : "Out of Stock "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TilesDetailsPage;
