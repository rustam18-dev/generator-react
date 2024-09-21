type Props = {
  onClick?: () => void,
  children: string,
  isSet: boolean,
}

export const Button = ({onClick, children, isSet}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#8e8e8e] text-white rounded-lg px-2 py-1 w-[110px] text-center cursor-pointer ${isSet ? "active_set" : ""}`}
    >
      {children}
    </button>
  );
};
