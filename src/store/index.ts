import {create} from 'zustand'
import {ICard} from "../types/types.ts";

type CardState = {
  firstSet: boolean
  previews: ICard[]
  fetchFirstSet: () => void
  fetchSecondSet: () => void
  addToPreviews: (item: ICard) => void
  removeFromPreviews: (item: ICard) => void
}

export const useCardStore = create<CardState>((set, get) => ({
  firstSet: true,
  previews: [] as ICard[],
  fetchFirstSet: () => set({
    firstSet: true
  }),
  fetchSecondSet: () => set({
    firstSet: false
  }),
  addToPreviews: (item: ICard) => {
    const previews = get().previews
    const isAdded = previews.some(prev => prev.id === item.id)

    if (!isAdded) {
      const updatedPreviews = previews.concat(item)

      set({previews: updatedPreviews})
    }
  },
  removeFromPreviews: (item: ICard) => {
    const previews = get().previews
    const updatedPreviews = previews.filter(prev => prev.id !== item.id)

    set({ previews: updatedPreviews })
  }
}))