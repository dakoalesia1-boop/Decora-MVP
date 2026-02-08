import { getEndorsements } from "@/lib/endorsements";

export function isItemEndorsed(itemId: string): boolean {
  const endorsements = getEndorsements();
  return Boolean(endorsements[itemId]);
}
