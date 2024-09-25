import { useCardStore } from "../store";
import { useEffect, useState } from "react";
import { ICard } from "../types/types.ts";
import { firstCardsData, secondCardsData } from "../assets/data.ts";

export const useCards = () => {
  const { previews } = useCardStore();
  const [firstCards, setFirstCards] = useState<ICard[]>(firstCardsData);
  const [secondCards, setSecondCards] = useState<ICard[]>(secondCardsData);

  useEffect(() => {
    const updateCardsSelection = (cards: ICard[]) =>
      cards.map((card) => ({
        ...card,
        selected: previews.some((prev) => prev.id === card.id),
      }));

    setFirstCards(updateCardsSelection(firstCardsData));
    setSecondCards(updateCardsSelection(secondCardsData));
  }, [previews]);

  return { firstCards, secondCards };
};
