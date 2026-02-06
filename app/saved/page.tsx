"use client";

import { useSaved } from "../context/SavedContext";
import { useState } from "react";

export default function SavedPage() {
  const {
    boards,
    createBoard,
    deleteBoard,
    moveItem,
    removeFromBoard,
  } = useSaved();

  const [newBoardName, setNewBoardName] = useState("");

  return (
    <div className="min-h-screen bg-[#f8f5f0] p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold text-[#2f2f2f]">
          Your Moodboards
        </h1>

        {/* Create board */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="New board name"
            value={newBoardName}
            onChange={(e) => setNewBoardName(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm"
          />
          <button
            onClick={() => {
              if (!newBoardName.trim()) return;
              createBoard(newBoardName);
              setNewBoardName("");
            }}
            className="bg-[#3b2f2a] text-white px-4 py-2 rounded-lg text-sm"
          >
            Create
          </button>
        </div>
      </div>

      {/* Boards */}
      <div className="space-y-14">
        {boards.map((board) => (
          <div
            key={board.id}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const itemId = Number(e.dataTransfer.getData("itemId"));
              const fromBoard = Number(
                e.dataTransfer.getData("fromBoard")
              );
              moveItem(itemId, fromBoard, board.id);
            }}
          >
            {/* Board header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium text-[#3b2f2a]">
                {board.name}
                <span className="text-sm text-[#6b6b6b] ml-2">
                  · {board.items.length} items
                </span>
              </h2>

              <button
                onClick={() => {
                  if (
                    confirm(
                      `Delete the board "${board.name}"? This cannot be undone.`
                    )
                  ) {
                    deleteBoard(board.id);
                  }
                }}
                className="text-sm text-red-600 hover:underline"
              >
                Delete board
              </button>
            </div>

            {/* Cover image */}
            {board.coverImage && (
              <img
                src={board.coverImage}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            )}

            {/* Items */}
            {board.items.length === 0 ? (
              <p className="text-[#6b6b6b]">
                No designs saved yet.
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {board.items.map((item) => (
                  <div
                    key={item.id}
                    draggable
                    onDragStart={(e) => {
                      e.dataTransfer.setData(
                        "itemId",
                        String(item.id)
                      );
                      e.dataTransfer.setData(
                        "fromBoard",
                        String(board.id)
                      );
                    }}
                    className="relative group"
                  >
                    <img
                      src={item.image}
                      className="rounded-xl object-cover h-40 w-full cursor-move"
                    />

                    {/* Remove item */}
                    <button
                      onClick={() => {
                        if (confirm("Remove this item from the board?")) {
                          removeFromBoard(board.id, item.id);
                        }
                      }}
                      className="absolute top-2 right-2 bg-white rounded-full w-7 h-7
                                 flex items-center justify-center text-[#3b2f2a]
                                 opacity-0 group-hover:opacity-100 transition shadow"
                    >
                      ×
                    </button>
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
