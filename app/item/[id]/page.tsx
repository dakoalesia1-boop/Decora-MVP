"use client";

import { useParams } from "next/navigation";
import { useProducts } from "@/app/context/ProductContext";
import { getEndorsements } from "@/lib/endorsements";
import ItemActions from "./ItemActions";

export default function ItemPage() {
  const { products } = useProducts();
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const item = products.find((p) => String(p.id) === String(id));

  if (!item) {
    return (
      <div style={{ padding: 40 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700 }}>
          Item not found
        </h1>
      </div>
    );
  }

  const endorsements = getEndorsements();
  const endorsement = endorsements[String(item.id)];

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", padding: 20 }}>
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "100%",
          height: 420,
          objectFit: "cover",
          borderRadius: 20,
        }}
      />

      <h1 style={{ fontSize: 32, fontWeight: 800, marginTop: 20 }}>
        {item.name}
      </h1>

      <p style={{ color: "#6b6b6b", marginTop: 6 }}>
        {item.style} · €{item.price}
      </p>

      {endorsement && (
        <p style={{ marginTop: 8, fontWeight: 600 }}>
          ✔ Endorsed by {endorsement.designerName}
        </p>
      )}

      <ItemActions item={item} />
    </div>
  );
}
