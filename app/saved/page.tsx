"use client";

import { useState } from "react";
import Link from "next/link";
import { useSaved } from "@/app/context/SavedContext";

export default function SavedPage() {
  const {
    moodboards,
    createMoodboard,
    moveItem,
    deleteMoodboard,
  } = useSaved();

  const [newBoardName, setNewBoardName] = useState("");
  const [dragged, setDragged] = useState<{
    itemId: string;
    fromBoardId: string;
  } | null>(null);

  return (
    <div
      style={{
        padding: 40,
        minHeight: "100vh",
        background: "#f8f5f0",
        color: "#2f2f2f",
      }}
    >
      <h1 style={{ fontSize: 28, fontWeight: 700 }}>
        Your Moodboards
      </h1>

      {/* CREATE MOODBOARD */}
      <div
        style={{
          marginTop: 20,
          display: "flex",
          gap: 8,
          maxWidth: 420,
        }}
      >
        <input
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
          placeholder="Create a new moodboard…"
          style={{
            flex: 1,
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #ccc",
            background: "white",
          }}
        />
        <button
          onClick={() => {
            if (!newBoardName.trim()) return;
            createMoodboard(newBoardName);
            setNewBoardName("");
          }}
          style={primaryButton}
        >
          Create
        </button>
      </div>

      {/* MOODBOARDS */}
      <div style={{ marginTop: 40 }}>
        {moodboards.map((board) => (
          <div
            key={board.id}
            style={{ marginBottom: 50 }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
              if (
                dragged &&
                dragged.fromBoardId !== board.id
              ) {
                moveItem(
                  dragged.fromBoardId,
                  board.id,
                  dragged.itemId
                );
                setDragged(null);
              }
            }}
          >
            {/* HEADER */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#3b2f2a",
                }}
              >
                {board.name}
              </h2>

              <button
                onClick={() => {
                  const confirmDelete = confirm(
                    `Delete the moodboard "${board.name}"?\nThis cannot be undone.`
                  );
                  if (confirmDelete) {
                    deleteMoodboard(board.id);
                  }
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#b91c1c",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>

            {board.items.length === 0 ? (
              <p style={{ marginTop: 10, color: "#6b6b6b" }}>
                Drag items here
              </p>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: 20,
                  marginTop: 20,
                }}
              >
                {board.items.map((item) => (
                  <div
                    key={item.id}
                    draggable
                    onDragStart={() =>
                      setDragged({
                        itemId: item.id,
                        fromBoardId: board.id,
                      })
                    }
                    style={{
                      border: "1px solid #e5e5e5",
                      borderRadius: 14,
                      overflow: "hidden",
                      background: "white",
                      cursor: "grab",
                      boxShadow:
                        "0 2px 6px rgba(0,0,0,0.05)",
                    }}
                  >
                    <Link href={`/item/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: 180,
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                    <div style={{ padding: 12 }}>
                      <p style={{ fontWeight: 600 }}>
                        {item.name}
                      </p>
                      <p style={{ fontSize: 14, color: "#6b6b6b" }}>
                        €{item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const primaryButton = {
  padding: "10px 16px",
  borderRadius: 10,
  background: "#3b2f2a",
  color: "white",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
};
