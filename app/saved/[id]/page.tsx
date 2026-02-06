"use client";

import { useParams } from "next/navigation";
import { useSaved } from "../../context/SavedContext";

export default function SharedBoardPage() {
  const { id } = useParams();
  const { boards } = useSaved();

  const board = boards.find((b) => b.id === Number(id));

  if (!board) return <div className="p-8">Board not found</div>;

  return (
    <div className="min-h-screen bg-[#f8f5f0] p-8">
      <h1 className="text-3xl font-semibold mb-6">{board.name}</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {board.items.map((item) => (
          <img
            key={item.id}
            src={item.image}
            className="rounded-xl object-cover h-40 w-full"
          />
        ))}
      </div>
    </div>
  );
}