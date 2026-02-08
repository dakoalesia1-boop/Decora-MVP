"use client";

import { useRouter } from "next/navigation";

<p style={{ fontSize: 12, opacity: 0.6 }}>
  Build version: seller-dashboard-v1
</p>

export default function RoleSelectPage() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8f5f0",
        color: "#2f2f2f",
        padding: 24,
      }}
    >
      <div
        style={{
          maxWidth: 420,
          width: "100%",
          background: "white",
          borderRadius: 20,
          padding: 32,
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 32, fontWeight: 800 }}>
          Decora
        </h1>

        <p
          style={{
            marginTop: 8,
            marginBottom: 28,
            color: "#6b6b6b",
          }}
        >
          How would you like to use Decora?
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <button
            onClick={() => router.push("/buyer")}
            style={primaryButton}
          >
            🛋 I’m a Buyer
          </button>

          <button
            onClick={() => router.push("/designer")}
            style={secondaryButton}
          >
            🎨 I’m a Designer
          </button>

          <button
            onClick={() => router.push("/seller")}
            style={secondaryButton}
          >
            🏪 I’m a Seller
          </button>
        </div>
      </div>
    </main>
  );
}

/* ---------- STYLES ---------- */

const primaryButton = {
  padding: "14px",
  borderRadius: 14,
  background: "#3b2f2a",
  color: "white",
  fontWeight: 700,
  fontSize: 16,
  border: "none",
  cursor: "pointer",
};

const secondaryButton = {
  padding: "14px",
  borderRadius: 14,
  background: "transparent",
  color: "#3b2f2a",
  fontWeight: 700,
  fontSize: 16,
  border: "1px solid #3b2f2a",
  cursor: "pointer",
};