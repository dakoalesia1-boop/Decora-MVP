"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { furnitureItems } from "@/app/data/furnitureData";
import { useCart } from "@/app/context/CartContext";
import { useSaved } from "@/app/context/SavedContext";

export default function ItemPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const { boards, saveToBoard } = useSaved();

  const [selectedBoardId, setSelectedBoardId] = useState<number>(
    boards[0]?.id
  );
  const [showCartToast, setShowCartToast] = useState(false);
  const [showSavedToast, setShowSavedToast] = useState(false);

  const rawId = params?.id;
  const id = Array.isArray(rawId) ? Number(rawId[0]) : Number(rawId);

  const item = furnitureItems.find((i) => i.id === id);

  if (!item) {
    return <div className="p-8">Item not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0] p-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl p-8 shadow-sm">
        {/* Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-[420px] object-cover rounded-xl"
        />

        {/* Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-[#2f2f2f] mb-2">
              {item.name}
            </h1>

            <p className="text-xl text-[#6b6b6b] mb-4">
              ${item.price}
            </p>

            <span className="inline-block bg-[#f1ede6] text-[#2f2f2f] text-sm px-4 py-1 rounded-full mb-6">
              ✔ Designer Endorsed
            </span>

            <p className="text-[#4a4a4a] mb-2">
              <strong>Style:</strong> {item.style}
            </p>
            <p className="text-[#4a4a4a] mb-6">
              <strong>Category:</strong> {item.type}
            </p>

            <Link
                href={`/designer/${item.designerId}`}
                className="text-sm underline text-[#6b6b6b]"
            >       
                View designer profile
            </Link>

          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4 mt-8">
            {/* Add to Cart */}
            <button
              onClick={() => {
                addToCart({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                });
                setShowCartToast(true);
                setTimeout(() => setShowCartToast(false), 2000);
              }}
              className="bg-[#3b2f2a] text-white py-3 rounded-xl hover:opacity-90 transition"
            >
              Add to Cart
            </button>

            {/* Board selector */}
            <div className="flex gap-2 items-center">
              <select
                value={selectedBoardId}
                onChange={(e) =>
                  setSelectedBoardId(Number(e.target.value))
                }
                className="border rounded-lg p-2 text-sm text-[#2f2f2f] bg-white"
              >
                {boards.map((board) => (
                  <option key={board.id} value={board.id}>
                    {board.name}
                  </option>
                ))}
              </select>

              <button
                onClick={() => {
                  saveToBoard(selectedBoardId, {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                  });
                  setShowSavedToast(true);
                  setTimeout(() => setShowSavedToast(false), 2000);
                }}
                className="border border-[#3b2f2a] text-[#3b2f2a] px-4 py-2 rounded-xl hover:bg-[#f1ede6] transition"
              >
                Save to Moodboard
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast: Cart */}
      {showCartToast && (
        <div className="fixed bottom-6 right-6 bg-[#3b2f2a] text-white px-4 py-2 rounded-lg shadow">
          Added to cart
        </div>
      )}

      {/* Toast: Saved */}
      {showSavedToast && (
        <div className="fixed bottom-16 right-6 bg-[#2f2f2f] text-white px-4 py-2 rounded-lg shadow">
          Saved to moodboard
        </div>
      )}
    </div>
  );
}