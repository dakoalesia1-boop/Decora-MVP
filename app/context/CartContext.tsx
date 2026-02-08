"use client";

import { createContext, useContext, useEffect, useState } from "react";

/* ---------------- TYPES ---------------- */

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
};

/* --------------- CONTEXT ---------------- */

const CartContext = createContext<CartContextType | null>(null);

/* -------------- PROVIDER ---------------- */

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  /* Load cart from localStorage on first client render */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedCart = localStorage.getItem("decora-cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  /* Persist cart to localStorage on every change */
  useEffect(() => {
    if (typeof window === "undefined") return;

    localStorage.setItem("decora-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  /* ---------------- ACTIONS ---------------- */

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const increaseQty = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /* --------------- PROVIDER ---------------- */

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* ---------------- HOOK ---------------- */

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within a CartProvider"
    );
  }

  return context;
}
