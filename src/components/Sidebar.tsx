import { Button } from "./ui/Button.tsx";
import { useButtonHandlers } from "../hooks/useButtonHandlers .ts";

export const Sidebar = () => {
  const buttons = useButtonHandlers();

  return (
    <>
      <div className='flex flex-col justify-between z-10 bg-[#565555] w-[20%] h-screen p-7 shadow-[5px_-1px_35px_-4px_rgba(0,0,0,1)]'>
        <div className='flex flex-col h-full'>
          <h1 className='text-[#4bc81e] text-3xl font-bold mb-8'>Creator AI</h1>
          <div className='flex flex-col gap-4'>
            {buttons.map((btn, idx) => (
              <Button key={idx} {...btn}>
                {btn.text}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <Button
            variant='generator'
            className='w-[160px]'
            disabled
          >
            Сгенерировать
          </Button>
        </div>
      </div>
    </>
  );
};
