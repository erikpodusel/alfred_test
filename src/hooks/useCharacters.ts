import { swapi } from "../swapi";
import { useEffect, useState } from "react";
import { PeoplePage, PeopleParams } from "../types";
import { parseParams } from "../utils/parseParams";

export const useCharacters = (params: PeopleParams) => {
  const [people, setPeople] = useState<PeoplePage | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getPeople(params)
      .then(({ data }) => {
        setPeople(data);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setPeople(undefined);
    };
  }, [params]);

  const getPeople = async (params: PeopleParams): Promise<{ data: PeoplePage }> => {
    const parsedParams = parseParams(params);

    return swapi.get(`people${parsedParams}`);
  };

  return { characters: people, loading };
};
