import { useCardStore } from "../store";

export const useButtonHandlers = () => {
  const { firstSet, fetchFirstSet, fetchSecondSet } = useCardStore();

  return [
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
};
