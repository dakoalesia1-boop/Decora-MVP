"use client";

import { useEffect } from "react";

type ToastProps = {
  message: string;
  onClose: () => void;
};

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 30,
        right: 30,
        background: "#3b2f2a",
        color: "white",
        padding: "12px 18px",
        borderRadius: 12,
        fontWeight: 600,
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
}
