"use client";

import { useRouter } from "next/navigation";

export default function RoleSelect() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 420 }}>
        <h1 style={{ fontSize: 36, fontWeight: 800 }}>Decora</h1>
        <p style={{ marginTop: 10, opacity: 0.7 }}>
          How would you like to use Decora?
        </p>

        <div style={{ display: "grid", gap: 16, marginTop: 30 }}>
          <button
            onClick={() => router.push("/buyer")}
            style={buttonStyle}
          >
            🛋 I’m a Buyer
          </button>

          <button
            onClick={() => router.push("/designer/onboarding")}
            style={buttonStyle}
          >
            🎨 I’m a Designer
          </button>

          <button
            onClick={() => alert("Seller MVP coming soon")}
            style={buttonStyle}
          >
            🏪 I’m a Seller
          </button>
        </div>
      </div>
    </main>
  );
}

const buttonStyle = {
  padding: "14px",
  borderRadius: 14,
  border: "1px solid #ddd",
  fontSize: 16,
  fontWeight: 600,
  cursor: "pointer",
};
