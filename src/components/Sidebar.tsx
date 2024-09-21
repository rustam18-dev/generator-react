import { useCardStore } from "../store";
import { Button } from "./ui/Button.tsx";

export const Sidebar = () => {
  const fetchFirstSet = useCardStore((state) => state.fetchFirstSet);
  const fetchSecondSet = useCardStore((state) => state.fetchSecondSet);
  const firstSet = useCardStore((state) => state.firstSet);

  const buttons = [
    {
      onClick: fetchFirstSet,
      isSet: firstSet,
      text: "Набор 1",
    },
    {
      onClick: fetchSecondSet,
      isSet: !firstSet,
      text: "Набор 2",
    },
  ];
  return (
    <>
      <div className='flex flex-col justify-between z-10 bg-[#565555] w-[20%] h-screen p-7 shadow-[5px_-1px_35px_-4px_rgba(0,0,0,1)]'>
        <div className='flex flex-col h-full'>
          <h1 className='text-[#4bc81e] text-3xl font-bold mb-8'>Creator AI</h1>
          <div className='flex flex-col gap-4'>
            {buttons.map(btn=> (
              <Button {...btn}>{btn.text}</Button>
            ))}
          </div>
        </div>
        <div>
          <button
            disabled
            className='bg-[#154a01] text-white font-bold rounded-lg px-2 py-1 w-[160px] text-center cursor-pointer'
          >
            Сгенерировать
          </button>
        </div>
      </div>
    </>
  );
};
