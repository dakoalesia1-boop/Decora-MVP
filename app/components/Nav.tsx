"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { useEffect, useState } from "react";

export default function Nav() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const [animate, setAnimate] = useState(false);

  // Animate cart badge when count changes
  useEffect(() => {
    if (totalItems > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-[#3b2f2a]">
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-semibold tracking-wide text-[#f8f5f0]"
      >
        Decora
      </Link>

      {/* Navigation links */}
      <div className="flex gap-8 items-center text-[#f1ede6]">
        <Link href="/explore" className="hover:opacity-80">
          Explore
        </Link>

        <Link href="/search" className="hover:opacity-80">
          Search
        </Link>

        <Link href="/saved" className="hover:opacity-80">
          Saved
        </Link>

        {/* Cart with badge */}
        <Link href="/cart" className="relative hover:opacity-80">
          Cart
          {totalItems > 0 && (
            <span
              className={`absolute -top-2 -right-4 bg-[#f1ede6] text-[#3b2f2a]
              text-xs font-semibold px-2 py-0.5 rounded-full
              transition-transform ${
                animate ? "scale-125" : "scale-100"
              }`}
            >
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}