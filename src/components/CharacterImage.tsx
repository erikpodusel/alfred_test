import { FC } from "react";

interface Props {
  characterId: string;
}

export const CharacterImage: FC<Props> = ({ characterId }) => {
  return (
    <img
      src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`}
      alt={"Character avatar"}
      loading={"lazy"}
      className={"h-12 w-auto rounded-md"}
    />
  );
};
