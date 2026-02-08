"use client";

import Link from "next/link";
import { furnitureItems } from "@/lib/furnitureData";
import { getEndorsements } from "@/lib/endorsements";

export default function ExplorePage() {
  const endorsements = getEndorsements();

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
        Explore Designs
      </h1>

      <div
        style={{
          marginTop: 30,
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 24,
        }}
      >
        {furnitureItems.map((item) => {
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
              {/* ✅ CONDITIONAL DESIGNER BADGE */}
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
                  ✔ Endorsed by{" "}
                  {endorsement.designer.split(" — ")[0]}
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
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: 16,
                    marginBottom: 4,
                  }}
                >
                  {item.name}
                </p>

                <p
                  style={{
                    fontSize: 14,
                    color: "#6b6b6b",
                  }}
                >
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
