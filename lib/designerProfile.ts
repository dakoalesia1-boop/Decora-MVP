const KEY = "decora_designer_profile";

export type DesignerProfile = {
  name: string;
  bio: string;
};

export function saveDesigner(profile: DesignerProfile) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(profile));
}

export function getDesigner(): DesignerProfile | null {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : null;
}
