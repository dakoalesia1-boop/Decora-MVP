"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#f8f5f0] p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-[#2f2f2f] mb-6">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-[#6b6b6b]">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6 mb-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-4"
                >
                  {/* Item info */}
                  <div>
                    <p className="text-[#2f2f2f] font-medium">
                      {item.name}
                    </p>
                    <p className="text-sm text-[#6b6b6b]">
                      ${item.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-2 py-1 border rounded"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-2 py-1 border rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="text-right">
                    <p className="text-[#2f2f2f] font-medium">
                      ${item.price * item.quantity}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-600 hover:underline mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="flex justify-between text-lg font-semibold text-[#2f2f2f] mb-6">
              <span>Total</span>
              <span>${total}</span>
            </div>

            <button
              disabled
              className="w-full bg-[#3b2f2a] text-white py-3 rounded-xl opacity-70 cursor-not-allowed"
            >
              Checkout (coming soon)
            </button>
          </>
        )}
      </div>
    </div>
  );
}
