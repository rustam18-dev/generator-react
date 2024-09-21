import { useCardStore } from "../store";
import { ICard } from "../types/types.ts";
import { Preview } from "./Preview.tsx";
import { useCards } from "../hooks/useCards.ts";
import { Card } from "./Card.tsx";

export const Content = () => {
  const isFirstSetActive = useCardStore((state) => state.firstSet);
  const { firstCards, secondCards } = useCards();

  return (
    <div className='flex flex-col justify-between w-full'>
      <div className='p-7 flex gap-[30px] flex-wrap overflow-auto'>
        {isFirstSetActive ?
          firstCards.map((card: ICard) => (
            <Card
              key={card.id}
              id={card.id}
              img={card.img}
              alt={card.alt}
              selected={card.selected}
            />
          ))
        : secondCards.map((card: ICard) => (
            <Card
              key={card.id}
              id={card.id}
              img={card.img}
              alt={card.alt}
              selected={card.selected}
            />
          ))
        }
      </div>
      <div className='flex items-center gap-4 pl-16 py-2 bg-[#8e8e8e] h-[13%]'>
        <Preview />
      </div>
    </div>
  );
};
