import { ICard } from "../types/types.ts";
import { useSerialNumber } from "../hooks/useSerialNumber.ts";
import { useCardStore } from "../store";

export const Card = ({ id, selected, alt, img }: ICard) => {
  const { addToPreviews, previews } = useCardStore();

  return (
    <div
      key={id}
      onClick={() => addToPreviews(id)}
      className={`relative w-[300px] h-[300px] flex items-center justify-center cursor-pointer group ${
        selected ? "darkened" : ""
      }`}
    >
      <img src={img} alt={alt} className='w-full h-full object-cover' />
      <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300'>
        <span style={{ fontSize: 35, marginLeft: 15 }}>
          {useSerialNumber(previews, id)}
        </span>
      </div>
    </div>
  );
};
