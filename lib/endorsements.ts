const KEY = "decora_endorsements";

export type EndorsementMap = {
  [key: string]: {
    designer: string;
    date: string;
  };
};

export function getEndorsements(): EndorsementMap {
  if (typeof window === "undefined") return {};
  return JSON.parse(localStorage.getItem(KEY) || "{}");
}

export function toggleEndorsement(
  itemId: string,
  designer: string
): EndorsementMap {
  const current = getEndorsements();

  if (current[itemId]) {
    delete current[itemId];
  } else {
    current[itemId] = {
      designer,
      date: new Date().toISOString(),
    };
  }

  localStorage.setItem(KEY, JSON.stringify(current));
  return current;
}