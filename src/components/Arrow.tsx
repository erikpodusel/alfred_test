import { FC } from "react";

interface Props {
  onClick?: () => void;
  direction?: "left" | "right";
}

export const Arrow: FC<Props> = ({ onClick, direction = "left" }) => {
  return (
    <button
      className={"cursor-pointer card hover:shadow-medium transition-shadow duration-300 p-0"}
      onClick={onClick}
    >
      <strong className={"w-12 h-12 items-center justify-center flex"}>
        {direction === "left" ? "<" : ">"}
      </strong>
    </button>
  );
};
