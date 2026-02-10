"use client";

import { useEffect, useState } from "react";
import { useProducts } from "@/app/context/ProductContext";
import {
  getEndorsements,
  toggleEndorsement,
  type Endorsement,
} from "@/lib/endorsements";

export default function DesignerDashboard() {
  const { products } = useProducts();

  const designerName = "Alesia Dako";
  const designerBio =
    "I believe that honoring history, location and architecture is imperative to pushing the boundaries and challenging the rules.";

  const [mounted, setMounted] = useState(false);
  const [endorsementsMap, setEndorsementsMap] = useState<
    Record<string, Endorsement>
  >({});

  useEffect(() => {
    setMounted(true);
    setEndorsementsMap(getEndorsements());
  }, []);

  if (!mounted) return null;

  const onToggle = (itemId: string) => {
    const updated = toggleEndorsement(itemId, {
      designerName,
      designerBio,
    });
    setEndorsementsMap(updated);
  };

  return (
    <div
      style={{
        padding: 40,
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: 32, fontWeight: 800 }}>
        Designer Dashboard
      </h1>

      <p style={{ marginTop: 6, color: "#b5b5b5", maxWidth: 700 }}>
        Logged in as <strong>{designerName}</strong>. {designerBio}
      </p>

      <div style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: 16 }}>
        {products.map((item) => {
          const id = String(item.id);
          const endorsed = Boolean(endorsementsMap[id]);

          return (
            <div
              key={id}
              style={{
                background: "#121212",
                borderRadius: 14,
                padding: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: 90,
                    height: 70,
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />

                <div>
                  <p style={{ fontWeight: 700 }}>
                    {item.name}
                  </p>
                  <p style={{ fontSize: 14, color: "#9ca3af" }}>
                    {item.style} · €{item.price}
                  </p>

                  {endorsed && (
                    <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 4 }}>
                      ✔ Endorsed by you
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={() => onToggle(id)}
                style={{
                  padding: "8px 14px",
                  borderRadius: 10,
                  background: endorsed ? "#3a3a3a" : "#ffffff",
                  color: endorsed ? "white" : "#0b0b0b",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {endorsed ? "Remove" : "Endorse"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}