import { create } from "zustand";
import { ICard } from "../types/types.ts";
import { firstCardsData, secondCardsData } from "../assets/data.ts";

type CardState = {
  firstSet: boolean;
  previews: ICard[];
  fetchFirstSet: () => void;
  fetchSecondSet: () => void;
  addToPreviews: (id: number) => void;
  removeFromPreviews: (item: ICard) => void;
};

export const useCardStore = create<CardState>((set, get) => ({
  firstSet: true,
  previews: [] as ICard[],
  fetchFirstSet: () => {
    if (get().firstSet) return;

    set({
      previews: [],
      firstSet: true,
    });
  },
  fetchSecondSet: () => {
    if (!get().firstSet) return;

    set({
      previews: [],
      firstSet: false,
    });
  },
  addToPreviews: (id: number) => {
    const previews = get().previews;
    const isAdded = previews.some((prev) => prev.id === id);
    const sets = [...firstCardsData, ...secondCardsData];
    const item = sets.find((elem: ICard) => elem.id === id);

    if (!isAdded && item) {
      const updatedPreviews = previews.concat(item);
      set({ previews: updatedPreviews });
    }
  },
  removeFromPreviews: (item: ICard) => {
    const previews = get().previews;
    const updatedPreviews = previews.filter((prev) => prev.id !== item.id);

    set({ previews: updatedPreviews });
  },
}));
