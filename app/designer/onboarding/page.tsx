"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { saveDesigner } from "@/lib/designerProfile";

export default function DesignerOnboarding() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  function handleSubmit() {
    if (!name || !bio) return alert("Please fill in all fields");

    saveDesigner({ name, bio });
    router.push("/designer");
  }

  return (
    <div style={{ maxWidth: 500, margin: "60px auto", padding: 20 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700 }}>
        Designer Profile
      </h1>
      <p style={{ opacity: 0.7 }}>
        This will be shown with your endorsements
      </p>

      <div style={{ marginTop: 20 }}>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <label style={{ marginTop: 12, display: "block" }}>
          Short Description
        </label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          style={{ ...inputStyle, height: 80 }}
        />

        <button onClick={handleSubmit} style={buttonStyle}>
          Continue
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: 10,
  borderRadius: 10,
  border: "1px solid #ccc",
  marginTop: 6,
};

const buttonStyle = {
  marginTop: 20,
  padding: 12,
  borderRadius: 12,
  border: "1px solid #ccc",
  fontWeight: 600,
  cursor: "pointer",
};
