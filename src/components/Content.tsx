import {firstSetOfCards, secondSetOfCards} from "../assets/data.ts"
import {useCardStore} from "../store"
import {useEffect, useState} from "react"
import {ICard} from "../types/types.ts"
import {Preview} from "./Preview.tsx"

export const Content = () => {
  const firstSet = useCardStore(state => state.firstSet)
  const previews = useCardStore(state => state.previews)
  const addToPreviews = useCardStore(state => state.addToPreviews)

  const [firstCards, setFirstCards] = useState(firstSetOfCards)
  const [secondCards, setSecondCards] = useState(secondSetOfCards)

  useEffect(() => {
    const updatedFirstCards = firstSetOfCards.map(card => ({
      ...card,
      selected: previews.some(prev => prev.id === card.id)
    }));

    const updatedSecondCards = secondSetOfCards.map(card => ({
      ...card,
      selected: previews.some(prev => prev.id === card.id)
    }));

    setFirstCards(updatedFirstCards)
    setSecondCards(updatedSecondCards)
  }, [previews])

  const serialNumber = (card: ICard): number | null => {
    const index = previews.findIndex(prev => prev.id === card.id)

    return index !== -1 ? index + 1 : null
  }

  return <>
    <div className="flex flex-col justify-between w-full">
      <div className="p-7 flex gap-[30px] flex-wrap overflow-auto">
        {firstSet ? (
          firstCards.map((card) => (
            <div key={card.id} onClick={() => addToPreviews(card)}
                 className={`relative w-[300px] h-[300px] flex items-center justify-center cursor-pointer group ${card.selected ? 'darkened' : ''}`}>
              <img src={card.img} alt={card.alt} className="w-full h-full object-cover"/>
              <div
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"
              >
                <span style={{fontSize: 35, marginLeft: 15}}>{serialNumber(card)}</span>
              </div>

            </div>
          ))
        ) : secondCards.map((card) => (
          <div key={card.id} onClick={() => addToPreviews(card)} className={`relative w-[300px] h-[300px] flex items-center justify-center cursor-pointer group ${card.selected ? 'darkened' : ''}`}>
            <img src={card.img} alt={card.alt} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300">
              <span style={{fontSize: 35, marginLeft: 15}}>{serialNumber(card)}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 pl-16 py-2 bg-[#8e8e8e] h-[13%]">
        <Preview />
      </div>
    </div>
  </>
}