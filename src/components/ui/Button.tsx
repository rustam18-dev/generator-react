import { PropsWithChildren } from "react";
import clsx from "clsx";

type Props = PropsWithChildren<{
  onClick?: () => void;
  isSet?: boolean;
  className?: string;
  variant?: "default" | "generator";
  disabled?: boolean;
}>;

export const Button = ({
  onClick,
  children,
  isSet,
  className,
  variant = "default",
  disabled,
}: Props) => {
  const buttonBackground = {
    default: clsx("bg-[#8e8e8e]"),
    generator: clsx("bg-[#154a01]"),
  };
  return (
    <button
      onClick={onClick}
      className={clsx(
        buttonBackground[variant],
        className,
        "text-white rounded-lg px-2 py-1 w-[110px] font-bold ",
        { active_set: isSet },
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
