"use client";

import { useState } from "react";
import Link from "next/link";
import { furnitureItems } from "../../lib/furnitureData";

const styles = [
  "All",
  "Modern",
  "Scandinavian",
  "Minimalist",
  "Luxury",
  "Bohemian",
  "Industrial",
  "Japandi",
  "Mid-Century",
  "Contemporary",
  "Classic",
];

const categories = [
  "All",
  "Sofa",
  "Chair",
  "Table",
  "Bed",
  "Storage",
  "Lighting",
  "Desk",
];

export default function SearchPage() {
  const [style, setStyle] = useState("All");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(3000);

  const filteredItems = furnitureItems.filter((item) => {
    const styleMatch = style === "All" || item.style === style;
    const categoryMatch =
      category === "All" || item.type === category;
    const priceMatch = item.price <= maxPrice;
    return styleMatch && categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-[#f8f5f0] p-8">
      <h1 className="text-3xl font-semibold mb-8 text-[#2f2f2f]">
        Search Designs
      </h1>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Style */}
        <div>
          <label className="block text-sm mb-2 text-[#3b2f2a] font-medium">
            Style
          </label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="border p-2 rounded-lg w-full text-[#2f2f2f] bg-white"
          >
            {styles.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm mb-2 text-[#3b2f2a] font-medium">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded-lg w-full text-[#2f2f2f] bg-white"
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm mb-2 text-[#3b2f2a] font-medium">
            Max Budget:{" "}
            <span className="font-semibold">${maxPrice}</span>
          </label>
          <input
            type="range"
            min="100"
            max="3000"
            step="50"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-[#3b2f2a]"
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <Link
            key={item.id}
            href={`/item/${item.id}`}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="font-medium text-[#2f2f2f]">
                {item.name}
              </p>
              <p className="text-sm text-[#6b6b6b]">
                ${item.price}
              </p>
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
