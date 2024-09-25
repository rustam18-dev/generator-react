import { ICard } from "../types/types.ts";

export const useSerialNumber = (
  previews: ICard[],
  id: number,
): number | null => {
  const index = previews.findIndex((prev) => prev.id === id);
  return index !== -1 ? index + 1 : null;
};
