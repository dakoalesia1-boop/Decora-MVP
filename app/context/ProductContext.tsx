"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { furnitureItems as initialItems } from "@/lib/furnitureData";

export type Product = typeof initialItems[number];

type ProductContextType = {
  products: Product[];
  addProduct: (product: Product) => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  // Load initial + stored products
  useEffect(() => {
    const stored = localStorage.getItem("decora-products");
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      setProducts(initialItems);
    }
  }, []);

  // Persist products
  useEffect(() => {
    localStorage.setItem("decora-products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Product) => {
    setProducts((prev) => [product, ...prev]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductContext);
  if (!ctx) {
    throw new Error("useProducts must be used within ProductProvider");
  }
  return ctx;
}
