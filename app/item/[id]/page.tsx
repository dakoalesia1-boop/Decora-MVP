import { furnitureItems } from "@/lib/furnitureData";
import ItemActions from "./ItemActions";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ItemPage({ params }: PageProps) {
  const { id } = await params;

  const item = furnitureItems.find((i) => i.id === id);

  if (!item) {
    return (
      <div style={{ padding: 40 }}>
        <h1 style={{ fontSize: 24, fontWeight: 600 }}>
          Item not found
        </h1>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1000, margin: "40px auto", padding: 20 }}>
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "100%",
          maxHeight: 500,
          objectFit: "cover",
          borderRadius: 20,
        }}
      />

      <h1 style={{ fontSize: 32, fontWeight: 700, marginTop: 20 }}>
        {item.name}
      </h1>

      <p style={{ fontSize: 18, marginTop: 8 }}>
        {item.style} · €{item.price}
      </p>

      {/* ALL interactive + client-only logic lives here */}
      <ItemActions item={item} />
    </div>
  );
}
