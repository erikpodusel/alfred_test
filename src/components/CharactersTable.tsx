import { FC } from "react";
import { useCharacters } from "../hooks/useCharacters";

interface Props {}

export const CharactersTable: FC<Props> = () => {
  const {} = useCharacters();

  return (
    <table>
      <thead>
        <tr></tr>
      </thead>
      <tr>
        <td></td>
      </tr>
    </table>
  );
};
