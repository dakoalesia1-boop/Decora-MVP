// lib/endorsements.ts
export type Endorsement = {
  designerName: string;
  designerBio?: string;
  note?: string;
  createdAt: number;
};

const KEY = "decora-endorsements";

/**
 * Stored as:
 * {
 *   "item-id-string": { designerName, note, createdAt }
 * }
 */
export function getEndorsements(): Record<string, Endorsement> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Record<string, Endorsement>) : {};
  } catch {
    return {};
  }
}

export function setEndorsements(next: Record<string, Endorsement>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(next));
}

export function isEndorsed(itemId: string): boolean {
  const all = getEndorsements();
  return Boolean(all[itemId]);
}

export function endorseItem(
  itemId: string,
  payload: Omit<Endorsement, "createdAt">
) {
  const all = getEndorsements();
  all[itemId] = { ...payload, createdAt: Date.now() };
  setEndorsements(all);
  return all;
}

export function removeEndorsement(itemId: string) {
  const all = getEndorsements();
  delete all[itemId];
  setEndorsements(all);
  return all;
}

export function toggleEndorsement(
  itemId: string,
  payload: Omit<Endorsement, "createdAt">
) {
  const all = getEndorsements();
  if (all[itemId]) {
    delete all[itemId];
  } else {
    all[itemId] = { ...payload, createdAt: Date.now() };
  }
  setEndorsements(all);
  return all;
}
