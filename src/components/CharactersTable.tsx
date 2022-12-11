import { FC, useEffect } from "react";
import { PeopleParams, PersonKeys } from "../types";
import { CharacterImage } from "./CharacterImage";
import { Arrow } from "./Arrow";
import { useCharacters } from "../hooks/useCharacters";
import { Spinner } from "./Spinner";

import { useCachedState } from "../hooks/useCachedState";
import { SearchInput } from "./SearchInput";
import { AttributeSelect } from "./AttributeSelect";

export const CharactersTable: FC = () => {
  const [params, setParams] = useCachedState<PeopleParams>("alfred-test-params");
  const [personKeys, setPersonKeys] = useCachedState<PersonKeys[]>("alfred-test-person-keys", []);
  const { characters, loading } = useCharacters(params);

  useEffect(() => {
    if (!characters?.results.length) return;

    const character = characters.results[0];
    const keys: PersonKeys[] = [];

    Object.keys(character).forEach((key: PersonKeys) => keys.push(key));

    setPersonKeys(keys);
  }, [characters?.results]);

  const setPage = (pageNumber: number) => {
    setParams((prev) => ({
      ...prev,
      page: Number(prev?.page ?? 1) + pageNumber,
    }));
  };

  /**
   * Sets search param and resets page to 1 so paging restarts on new search
   * @param searchParam
   */
  const setSearch = (searchParam: string) => {
    setParams((prev) => ({
      ...prev,
      search: searchParam,
      page: 1,
    }));
  };

  const setAttribute = (attribute: PersonKeys) => {
    setParams((prev) => ({
      ...prev,
      attribute: attribute,
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
    <div className={"w-full card p-0 justify-between col gap-0"}>
      <table className={`col h-full max-h-full`}>
        <thead className={"p-4 flex shadow-light"}>
          <tr className={"justify-between flex-1 sm:row col sm:gap-0 gap-2"}>
            <td className={"flex col gap-2 sm:row w-full items-center"}>
              <h1 className={"w-full"}>
                <strong className={"text-2xl"}>Star Wars characters</strong>
              </h1>
              <AttributeSelect
                onSelect={setAttribute}
                attributes={personKeys as string[]}
                value={params?.attribute}
              />
              <SearchInput onSearch={setSearch} defaultValue={params?.search} />
            </td>
          </tr>
        </thead>
        <tbody className={"col overflow-x-scroll max-h-full px-4 gap-4 py-4"}>
          {loading ? (
            <tr className={"self-center"}>
              <td>
                <Spinner />
              </td>
            </tr>
          ) : (
            characters?.results.map(({ name, url }) => {
              const characterId = getCharacterIdFromUrl(url);

              return (
                <tr key={url} className={"row"}>
                  <td className={"row gap-4"}>
                    {characterId ? <CharacterImage characterId={characterId} /> : null}
                    <p className={"items-center flex"}>{name}</p>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <div className="flex border-t border-t-gray-200">
        <div className={"flex flex-1 items-center justify-center"}>
          {characters?.previous ? <Arrow onClick={() => setPage(-1)} /> : null}
        </div>
        <div className={"flex flex-1 items-center justify-center py-8"}>
          <strong>{params?.page ?? "1"}</strong>
        </div>
        <div className={"flex flex-1 items-center justify-center"}>
          {characters?.next ? <Arrow direction={"right"} onClick={() => setPage(1)} /> : null}
        </div>
      </div>
    </div>
  );
};
