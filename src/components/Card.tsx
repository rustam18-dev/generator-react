import { ICard } from "../types/types.ts"
import { useSerialNumber } from "../hooks/useSerialNumber.ts"
import { useCardStore } from "../store"

interface CardProps {
  card: ICard
}

export const Card = ({ card }: CardProps) => {
  const previews = useCardStore((state) => state.previews)
  const addToPreviews = useCardStore((state) => state.addToPreviews)

  return (
    <div
      key={card.id}
      onClick={() => addToPreviews(card)}
      className={`relative w-[300px] h-[300px] flex items-center justify-center cursor-pointer group ${
        card.selected ? "darkened" : ""
      }`}
    >
      <img src={card.img} alt={card.alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300">
        <span style={{ fontSize: 35, marginLeft: 15 }}>{useSerialNumber(previews, card)}</span>
      </div>
    </div>
  )
}
