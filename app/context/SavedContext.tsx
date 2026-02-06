"use client";

import { createContext, useContext, useEffect, useState } from "react";

type SavedItem = {
  id: number;
  name: string;
  image: string;
};

type Board = {
  id: number;
  name: string;
  items: SavedItem[];
  coverImage?: string;
};

type SavedContextType = {
  boards: Board[];
  saveToBoard: (boardId: number, item: SavedItem) => void;
  createBoard: (name: string) => void;
  deleteBoard: (boardId: number) => void;
  moveItem: (itemId: number, fromBoardId: number, toBoardId: number) => void;
  removeFromBoard: (boardId: number, itemId: number) => void;
};

const SavedContext = createContext<SavedContextType | null>(null);

export function SavedProvider({ children }: { children: React.ReactNode }) {
  const [boards, setBoards] = useState<Board[]>([]);

  // Load boards
  useEffect(() => {
    const stored = localStorage.getItem("decora-boards");
    if (stored) {
      setBoards(JSON.parse(stored));
    } else {
      setBoards([
        { id: 1, name: "Living Room", items: [] },
        { id: 2, name: "Bedroom", items: [] },
        { id: 3, name: "Inspiration", items: [] },
      ]);
    }
  }, []);

  // Persist boards
  useEffect(() => {
    localStorage.setItem("decora-boards", JSON.stringify(boards));
  }, [boards]);

  const saveToBoard = (boardId: number, item: SavedItem) => {
    setBoards((prev) =>
      prev.map((board) => {
        if (board.id !== boardId) return board;
        if (board.items.find((i) => i.id === item.id)) return board;

        return {
          ...board,
          items: [...board.items, item],
          coverImage: board.coverImage ?? item.image,
        };
      })
    );
  };

  const createBoard = (name: string) => {
    setBoards((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        items: [],
      },
    ]);
  };

  const deleteBoard = (boardId: number) => {
    setBoards((prev) => prev.filter((b) => b.id !== boardId));
  };

  const moveItem = (
    itemId: number,
    fromBoardId: number,
    toBoardId: number
  ) => {
    setBoards((prev) => {
      const item = prev
        .find((b) => b.id === fromBoardId)
        ?.items.find((i) => i.id === itemId);

      if (!item) return prev;

      return prev.map((board) => {
        if (board.id === fromBoardId) {
          return {
            ...board,
            items: board.items.filter((i) => i.id !== itemId),
          };
        }
        if (board.id === toBoardId) {
          return {
            ...board,
            items: [...board.items, item],
            coverImage: board.coverImage ?? item.image,
          };
        }
        return board;
      });
    });
  };

  const removeFromBoard = (boardId: number, itemId: number) => {
    setBoards((prev) =>
      prev.map((board) => {
        if (board.id !== boardId) return board;

        const updatedItems = board.items.filter(
          (item) => item.id !== itemId
        );

        return {
          ...board,
          items: updatedItems,
          coverImage: updatedItems[0]?.image,
        };
      })
    );
  };

  return (
    <SavedContext.Provider
      value={{
        boards,
        saveToBoard,
        createBoard,
        deleteBoard,
        moveItem,
        removeFromBoard,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  const ctx = useContext(SavedContext);
  if (!ctx) throw new Error("useSaved must be used within SavedProvider");
  return ctx;
}
