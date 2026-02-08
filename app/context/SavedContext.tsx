"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { FurnitureItem } from "@/lib/furnitureData";

/* -------- TYPES -------- */

export type Moodboard = {
  id: string;
  name: string;
  items: FurnitureItem[];
};

type SavedContextType = {
  moodboards: Moodboard[];
  createMoodboard: (name: string) => void;
  addItemToMoodboard: (boardId: string, item: FurnitureItem) => void;
  moveItem: (
    fromBoardId: string,
    toBoardId: string,
    itemId: string
  ) => void;
  deleteMoodboard: (boardId: string) => void;
};

/* -------- CONTEXT -------- */

const SavedContext = createContext<SavedContextType | null>(null);

/* -------- PROVIDER -------- */

export function SavedProvider({ children }: { children: React.ReactNode }) {
  const [moodboards, setMoodboards] = useState<Moodboard[]>([]);

  /* Load moodboards from localStorage */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("decora-moodboards");
    if (stored) {
      setMoodboards(JSON.parse(stored));
    }
  }, []);

  /* Persist moodboards to localStorage */
  useEffect(() => {
    if (typeof window === "undefined") return;

    localStorage.setItem(
      "decora-moodboards",
      JSON.stringify(moodboards)
    );
  }, [moodboards]);

  /* -------- ACTIONS -------- */

  const createMoodboard = (name: string) => {
    setMoodboards((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name,
        items: [],
      },
    ]);
  };

  const addItemToMoodboard = (boardId: string, item: FurnitureItem) => {
    setMoodboards((prev) =>
      prev.map((board) => {
        if (board.id !== boardId) return board;

        const exists = board.items.find(
          (i) => i.id === item.id
        );
        if (exists) return board;

        return {
          ...board,
          items: [...board.items, item],
        };
      })
    );
  };

  const moveItem = (
    fromBoardId: string,
    toBoardId: string,
    itemId: string
  ) => {
    let movedItem: FurnitureItem | null = null;

    const withoutItem = moodboards.map((board) => {
      if (board.id === fromBoardId) {
        const remaining = board.items.filter((item) => {
          if (item.id === itemId) {
            movedItem = item;
            return false;
          }
          return true;
        });
        return { ...board, items: remaining };
      }
      return board;
    });

    if (!movedItem) return;

    setMoodboards(
      withoutItem.map((board) =>
        board.id === toBoardId
          ? { ...board, items: [...board.items, movedItem!] }
          : board
      )
    );
  };

  const deleteMoodboard = (boardId: string) => {
    setMoodboards((prev) =>
      prev.filter((board) => board.id !== boardId)
    );
  };

  /* -------- PROVIDER -------- */

  return (
    <SavedContext.Provider
      value={{
        moodboards,
        createMoodboard,
        addItemToMoodboard,
        moveItem,
        deleteMoodboard,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
}

/* -------- HOOK -------- */

export function useSaved() {
  const context = useContext(SavedContext);
  if (!context) {
    throw new Error(
      "useSaved must be used within a SavedProvider"
    );
  }
  return context;
}
