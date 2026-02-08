"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { furnitureItems } from "@/lib/furnitureData";
import {
  getEndorsements,
  toggleEndorsement,
  type EndorsementMap,
} from "@/lib/endorsements";
import { getDesigner } from "@/lib/designerProfile";

type DesignerProfile = {
  name: string;
  bio: string;
};

export default function DesignerDashboard() {
  const router = useRouter();

  const [profile, setProfile] = useState<DesignerProfile | null>(null);
  const [endorsements, setEndorsements] = useState<EndorsementMap>({});

  // Load designer profile safely on client
  useEffect(() => {
    const storedProfile = getDesigner();

    if (!storedProfile) {
      router.push("/designer/onboarding");
    } else {
      setProfile(storedProfile);
    }
  }, [router]);

  // Load endorsements
  useEffect(() => {
    setEndorsements(getEndorsements());
  }, []);

  // Prevent render until profile is loaded
  if (!profile) {
    return null;
  }

  const safeProfile = profile;

  function handleToggle(itemId: string) {
    const updated = toggleEndorsement(
      itemId,
      `${safeProfile.name} — ${safeProfile.bio}`
    );
    setEndorsements(updated);
  }

  return (
    <div style={{ maxWidth: 1000, margin: "40px auto", padding: 20 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700 }}>
        Designer Dashboard
      </h1>

      <p style={{ marginTop: 6 }}>
        Logged in as <strong>{profile.name}</strong>
      </p>
      <p style={{ fontStyle: "italic", opacity: 0.7 }}>
        {profile.bio}
      </p>

      {furnitureItems.map((item) => {
        const endorsed = endorsements[item.id];

        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              gap: 16,
              border: "1px solid #eee",
              borderRadius: 14,
              padding: 16,
              marginTop: 20,
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: 120,
                height: 90,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />

            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>
              <p>
                {item.style} · €{item.price}
              </p>

              {endorsed && (
                <p style={{ fontWeight: 600 }}>
                  ✅ Endorsed by {endorsed.designer}
                </p>
              )}
            </div>

            <button
              onClick={() => handleToggle(item.id)}
              style={{
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid #ccc",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              {endorsed ? "Remove" : "Endorse"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
