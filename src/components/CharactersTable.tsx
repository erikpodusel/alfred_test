import { FC, useState } from "react";
import { PeopleParams } from "../types";
import { CharacterImage } from "./CharacterImage";
import { Arrow } from "./Arrow";
import { useCharacters } from "../hooks/useCharacters";
import { Spinner } from "./Spinner";

interface Props {}

export const CharactersTable: FC<Props> = ({}) => {
  const [params, setParams] = useState<PeopleParams>({
    page: 1,
    search: null,
  });
  const { characters, loading } = useCharacters(params);

  const handleNextPage = () => {
    setParams((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  const handlePreviousPage = () => {
    setParams((prev) => ({
      ...prev,
      page: prev.page - 1,
    }));
  };

  /**
   *
   * @param url
   * @returns part of url that is a number
   */
  const getCharacterIdFromUrl = (url: string) => {
    return url.split("/").find((part) => Number(part) > 0);
  };

  return (
    <div className={"h-full w-full card p-8 justify-between col"}>
      {loading ? (
        <Spinner />
      ) : (
        <table className={`flex flex-1`}>
          <thead className={""}>
            {/*<tr>*/}
            {/*  {characters?.results*/}
            {/*    ? Object.keys(characters?.results[0]).map((resultKey) => (*/}
            {/*        <td key={resultKey}>{resultKey}</td>*/}
            {/*      ))*/}
            {/*    : null}*/}
            {/*</tr>*/}
          </thead>
          <tbody className={"col gap-4"}>
            {characters?.results.map(({ name, url }) => (
              <tr key={url} className={"row"}>
                <td className={"row gap-4"}>
                  <CharacterImage characterId={getCharacterIdFromUrl(url)} />
                  <p className={"items-center flex"}>{name}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="flex justify-self-end">
        <div className={"flex flex-1 items-center justify-center"}>
          {characters?.previous ? <Arrow onClick={handlePreviousPage} /> : null}
        </div>
        <div className={"flex flex-1 items-center justify-center"}>
          <strong>{params.page}</strong>
        </div>
        <div className={"flex flex-1 items-center justify-center"}>
          {characters?.next ? <Arrow direction={"right"} onClick={handleNextPage} /> : null}
        </div>
      </div>
    </div>
  );
};
