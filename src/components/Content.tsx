import { useCardStore } from "../store";
import { Preview } from "./Preview.tsx";
import { useCards } from "../hooks/useCards.ts";
import { Card } from "./Card.tsx";

export const Content = () => {
  const { firstSet: isFirstSetActive } = useCardStore();

  const { firstCards, secondCards } = useCards();

  return (
    <div className='flex flex-col justify-between w-full'>
      <div className='p-7 flex gap-[30px] flex-wrap overflow-auto'>
        {isFirstSetActive ?
          firstCards.map(({ id, selected, alt, img }) => (
            <Card key={id} id={id} img={img} alt={alt} selected={selected} />
          ))
        : secondCards.map(({ id, selected, alt, img }) => (
            <Card key={id} id={id} img={img} alt={alt} selected={selected} />
          ))
        }
      </div>
      <div className='flex items-center gap-4 pl-16 py-2 bg-[#8e8e8e] h-[13%]'>
        <Preview />
      </div>
    </div>
  );
};
