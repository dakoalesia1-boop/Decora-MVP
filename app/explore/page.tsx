import Link from "next/link";
import { furnitureItems } from "../data/furnitureData";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] p-8">
      <h1 className="text-3xl font-semibold mb-8 text-[#2f2f2f]">
        Explore Designs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {furnitureItems.map((item) => (
          <Link
            key={item.id}
            href={`/item/${item.id}`}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="relative">
              <span className="absolute top-4 left-4 bg-[#f1ede6] text-[#2f2f2f] text-xs px-3 py-1 rounded-full">
                ✔ Designer Endorsed
              </span>

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="p-4">
              <p className="font-medium text-[#2f2f2f]">{item.name}</p>
              <p className="text-sm text-[#6b6b6b]">${item.price}</p>
              <p className="text-xs text-[#8a8a8a]">
                {item.style} • {item.type}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
