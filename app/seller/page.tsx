"use client";

import { useEffect, useState } from "react";
import { getEndorsements } from "@/lib/endorsements";
import { useSaved } from "@/app/context/SavedContext";
import { useProducts } from "@/app/context/ProductContext";
import AddProductForm from "./AddProductForm";

export default function SellerDashboard() {
  // 🔑 Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔑 MVP: fake logged-in seller
  const sellerId = "1";
  const sellerName = "Decora Seller";

  const endorsements = getEndorsements();
  const { moodboards } = useSaved();
  const { products } = useProducts();

  // Seller's products (NOW from ProductContext)
  const sellerProducts = products.filter(
    (item) => item.sellerId === sellerId
  );

  // Count how many times a product appears in moodboards
  const getSavedCount = (productId: string) => {
    let count = 0;
    moodboards.forEach((board) => {
      board.items.forEach((it) => {
        if (it.id === productId) count++;
      });
    });
    return count;
  };

  // Summary metrics
  const totalProducts = sellerProducts.length;
  const totalEndorsed = sellerProducts.filter(
    (p) => Boolean(endorsements[p.id])
  ).length;
  const totalSaved = sellerProducts.reduce(
    (sum, p) => sum + getSavedCount(p.id),
    0
  );

  if (!mounted) {
    return null;
  }

  return (
    <div
      style={{
        padding: 40,
        minHeight: "100vh",
        background: "#f8f5f0",
        color: "#2f2f2f",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 20,
        }}
      >
        <div>
          <h1 style={{ fontSize: 32, fontWeight: 800 }}>
            Seller Dashboard
          </h1>
          <p style={{ color: "#6b6b6b", marginTop: 6 }}>
            Welcome,{" "}
            <span style={{ fontWeight: 600 }}>{sellerName}</span>. Track
            your listings, endorsements, and buyer interest.
          </p>
        </div>

        {/* ✅ ADD PRODUCT BUTTON */}
        <button
          onClick={() => setShowAddForm(true)}
          style={{
            padding: "12px 18px",
            borderRadius: 12,
            background: "#3b2f2a",
            color: "white",
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          + Add Product
        </button>
      </div>

      {/* ✅ ADD PRODUCT FORM */}
      {showAddForm && (
        <AddProductForm onClose={() => setShowAddForm(false)} />
      )}

      {/* SUMMARY CARDS */}
      <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        <SummaryCard label="Your products" value={totalProducts} />
        <SummaryCard label="Designer-endorsed" value={totalEndorsed} />
        <SummaryCard label="Saved to moodboards" value={totalSaved} />
      </div>

      {/* PRODUCT LIST */}
      <div style={{ marginTop: 34 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#3b2f2a" }}>
          Your Listings
        </h2>

        <div
          style={{
            marginTop: 18,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {sellerProducts.map((item) => {
            const endorsement = endorsements[item.id];
            const savedCount = getSavedCount(item.id);

            return (
              <div
                key={item.id}
                style={{
                  background: "white",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid #eee",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: 16 }}>
                  <p style={{ fontWeight: 700 }}>{item.name}</p>
                  <p style={{ color: "#6b6b6b", fontSize: 14 }}>
                    €{item.price} · {item.style}
                  </p>

                  <div style={{ marginTop: 10, fontSize: 14 }}>
                    <p>
                      {endorsement
                        ? "✔ Endorsed by designer"
                        : "— Not endorsed yet"}
                    </p>
                    <p>💾 Saved: {savedCount}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------- SMALL UI COMPONENT ---------- */

function SummaryCard({ label, value }: { label: string; value: number }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 16,
        padding: 16,
        border: "1px solid #eee",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <p style={{ color: "#6b6b6b", fontSize: 13, fontWeight: 700 }}>
        {label}
      </p>
      <p style={{ fontSize: 28, fontWeight: 800, marginTop: 6 }}>
        {value}
      </p>
    </div>
  );
}
