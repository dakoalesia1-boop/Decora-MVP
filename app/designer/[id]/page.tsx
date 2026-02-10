"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useProducts } from "@/app/context/ProductContext";
import { getEndorsements, type Endorsement } from "@/lib/endorsements";

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export default function DesignerProfilePage() {
  const params = useParams();
  const rawId = Array.isArray(params.id) ? params.id[0] : params.id;

  if (!rawId) {
    return (
      <div style={{ padding: 40 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700 }}>
          Designer not found
        </h1>
      </div>
    );
  }

  const designerName = normalize(decodeURIComponent(rawId));
  const { products } = useProducts();

  const [endorsedItems, setEndorsedItems] = useState<typeof products>([]);
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    const endorsements = getEndorsements();

    const items = products.filter((item) => {
      const endorsement: Endorsement | undefined =
        endorsements[String(item.id)];

      if (!endorsement) return false;

      if (normalize(endorsement.designerName) === designerName) {
        setDisplayName(endorsement.designerName);
        setBio(endorsement.designerBio ?? "");
        return true;
      }

      return false;
    });

    setEndorsedItems(items);
  }, [designerName, products]);

  if (endorsedItems.length === 0) {
    return (
      <div style={{ padding: 40 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700 }}>
          Designer not found
        </h1>
        <p style={{ marginTop: 10 }}>
          This designer has not endorsed any items yet.
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>
        {displayName}
      </h1>

      {bio && (
        <p style={{ marginTop: 8, fontStyle: "italic" }}>
          {bio}
        </p>
      )}

      <h2
        style={{
          marginTop: 40,
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        Endorsed Items
      </h2>

      <div
        style={{
          marginTop: 20,
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        {endorsedItems.map((item) => (
          <Link
            key={item.id}
            href={`/item/${item.id}`}
            style={{
              border: "1px solid #eee",
              borderRadius: 14,
              overflow: "hidden",
              background: "white",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: 180,
                objectFit: "cover",
              }}
            />
            <div style={{ padding: 12 }}>
              <p style={{ fontWeight: 600 }}>
                {item.name}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#6b6b6b",
                }}
              >
                €{item.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
