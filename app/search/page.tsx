"use client";

import { useState } from "react";
import Link from "next/link";
import { useProducts } from "@/app/context/ProductContext";
import { getEndorsements } from "@/lib/endorsements";

export default function SearchPage() {
  const { products } = useProducts();
  const endorsements = getEndorsements();

  // Filters
  const [selectedStyle, setSelectedStyle] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState<number>(3000);

  // Derive filter options dynamically
  const styles = ["All", ...Array.from(new Set(products.map(p => p.style)))];
  const types = ["All", ...Array.from(new Set(products.map(p => p.type)))];

  const filteredProducts = products.filter((item) => {
    const styleMatch =
      selectedStyle === "All" || item.style === selectedStyle;
    const typeMatch =
      selectedType === "All" || item.type === selectedType;
    const priceMatch = item.price <= maxPrice;

    return styleMatch && typeMatch && priceMatch;
  });

  return (
    <div
      style={{
        padding: 40,
        minHeight: "100vh",
        background: "#f8f5f0",
        color: "#2f2f2f",
      }}
    >
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>
        Search Designs
      </h1>

      {/* FILTERS */}
      <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
          maxWidth: 900,
        }}
      >
        {/* STYLE */}
        <div>
          <label style={{ fontWeight: 600 }}>Style</label>
          <select
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
            style={selectStyle}
          >
            {styles.map((style) => (
              <option key={style} value={style}>
                {style}
              </option>
            ))}
          </select>
        </div>

        {/* CATEGORY */}
        <div>
          <label style={{ fontWeight: 600 }}>Category</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={selectStyle}
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* BUDGET */}
        <div>
          <label style={{ fontWeight: 600 }}>
            Max Budget: €{maxPrice}
          </label>
          <input
            type="range"
            min={0}
            max={5000}
            step={50}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {/* RESULTS */}
      <div
        style={{
          marginTop: 36,
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 24,
        }}
      >
        {filteredProducts.map((item) => {
          const endorsement = endorsements[item.id];

          return (
            <Link
              key={item.id}
              href={`/item/${item.id}`}
              style={{
                position: "relative",
                background: "white",
                borderRadius: 16,
                overflow: "hidden",
                textDecoration: "none",
                color: "inherit",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              {/* DESIGNER BADGE */}
              {endorsement && (
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    background: "#f1ede6",
                    color: "#2f2f2f",
                    fontSize: 12,
                    padding: "4px 10px",
                    borderRadius: 999,
                    fontWeight: 600,
                    zIndex: 2,
                  }}
                >
                  ✔ Endorsed by{"endorsment.designerName"}
                </span>
              )}

              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: 16 }}>
                <p style={{ fontWeight: 600 }}>
                  {item.name}
                </p>
                <p style={{ color: "#6b6b6b", fontSize: 14 }}>
                  {item.style} · €{item.price}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const selectStyle: React.CSSProperties = {
  marginTop: 6,
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #ccc",
  width: "100%",
  background: "white",
};
