"use client";

import { useState } from "react";
import { useProducts } from "@/app/context/ProductContext";

const STYLE_OPTIONS = [
  "Modern",
  "Japandi",
  "Scandinavian",
  "Minimalist",
  "Industrial",
  "Mid-Century",
  "Luxury",
];

const TYPE_OPTIONS = [
  "Sofa",
  "Chair",
  "Table",
  "Bed",
  "Storage",
  "Lighting",
];

export default function AddProductForm({
  onClose,
}: {
  onClose: () => void;
}) {
  const { addProduct } = useProducts();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [style, setStyle] = useState(STYLE_OPTIONS[0]);
  const [type, setType] = useState(TYPE_OPTIONS[0]);
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    if (!name || !price || !image) return;

    addProduct({
      id: crypto.randomUUID(),
      name,
      price: Number(price),
      style,
      type,
      image,
      sellerId: "1",
    });

    onClose();
  };

  return (
    <div
      style={{
        marginTop: 24,
        background: "white",
        borderRadius: 16,
        padding: 20,
        border: "1px solid #eee",
        maxWidth: 420,
      }}
    >
      <h3 style={{ fontSize: 20, fontWeight: 700 }}>
        Add Product
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginTop: 14,
        }}
      >
        <input
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Price (€)"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        {/* STYLE DROPDOWN */}
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          {STYLE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* CATEGORY DROPDOWN */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {TYPE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
        <button
          onClick={handleSubmit}
          style={{
            padding: "10px 16px",
            borderRadius: 10,
            background: "#3b2f2a",
            color: "white",
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
          }}
        >
          Add product
        </button>

        <button
          onClick={onClose}
          style={{
            padding: "10px 16px",
            borderRadius: 10,
            background: "transparent",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}