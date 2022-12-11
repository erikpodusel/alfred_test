import { swapi } from "../swapi";
import { useEffect, useState } from "react";
import { PeoplePage, PeopleParams } from "../types";

export const useCharacters = (params: PeopleParams | undefined) => {
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

  const getPeople = async (params: PeopleParams | undefined): Promise<{ data: PeoplePage }> => {
    return swapi.get(
      `people?page=${params?.page ?? 1}&${params?.attribute ?? "search"}=${params?.search ?? ""}`,
    );
  };

  return { characters: people, loading };
};
