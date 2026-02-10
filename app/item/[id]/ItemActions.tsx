"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { FurnitureItem } from "@/lib/furnitureData";
import { useCart } from "@/app/context/CartContext";
import { useSaved } from "@/app/context/SavedContext";
import { getEndorsements } from "@/lib/endorsements";
import Toast from "@/app/components/Toast";

type Props = {
  item: FurnitureItem;
};

export default function ItemActions({ item }: Props) {
  const { addToCart } = useCart();
  const { moodboards, addItemToMoodboard } = useSaved();

  const [showBoards, setShowBoards] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [designerName, setDesignerName] = useState<string | null>(null);

  /* 🔑 CLIENT-ONLY: read endorsements */
  useEffect(() => {
    const endorsements = getEndorsements();
    const endorsement = endorsements[String(item.id)];

    if (endorsement) {
      const [name] = endorsement.designerName;
      setDesignerName(name);
    }
  }, [item.id]);

  return (
    <div style={{ marginTop: 24 }}>
      {/* DESIGNER LINK */}
      {designerName && (
        <Link
          href={`/designer/${encodeURIComponent(designerName)}`}
          style={{
            display: "inline-block",
            marginBottom: 12,
            fontWeight: 600,
            color: "#3b2f2a",
            textDecoration: "underline",
          }}
        >
          View designer profile →
        </Link>
      )}

      {/* ACTION BUTTONS */}
      <div style={{ display: "flex", gap: 12 }}>
        <button
          onClick={() => {
            addToCart({
              id: item.id,
              name: item.name,
              price: item.price,
            });
            setToast("Added to cart");
          }}
          style={primaryButton}
        >
          Add to Cart
        </button>

        <button
          onClick={() => setShowBoards((prev) => !prev)}
          style={secondaryButton}
        >
          Save to Moodboard
        </button>
      </div>

      {/* MOODBOARD PICKER */}
      {showBoards && (
        <div
          style={{
            marginTop: 16,
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 12,
            background: "#fafafa",
          }}
        >
          <p style={{ fontWeight: 600, marginBottom: 8 }}>
            Choose a moodboard
          </p>

          {moodboards.map((board) => (
            <button
              key={board.id}
              onClick={() => {
                addItemToMoodboard(board.id, item);
                setShowBoards(false);
                setToast(`Saved to "${board.name}"`);
              }}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid #ccc",
                background: "white",
                textAlign: "left",
                cursor: "pointer",
                display: "block",
                width: "100%",
                marginBottom: 6,
              }}
            >
              {board.name}
            </button>
          ))}
        </div>
      )}

      {/* TOAST */}
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}

/* ---------- STYLES ---------- */

const primaryButton = {
  padding: "12px 20px",
  borderRadius: 12,
  background: "#3b2f2a",
  color: "white",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
};

const secondaryButton = {
  padding: "12px 20px",
  borderRadius: 12,
  border: "1px solid #3b2f2a",
  background: "transparent",
  color: "#3b2f2a",
  fontWeight: 600,
  cursor: "pointer",
};
