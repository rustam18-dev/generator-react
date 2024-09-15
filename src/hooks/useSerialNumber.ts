import {ICard} from "../types/types.ts"

export const useSerialNumber = (previews: ICard[], card: ICard): number | null => {
  const index = previews.findIndex((prev) => prev.id === card.id)
  return index !== -1 ? index + 1 : null
}