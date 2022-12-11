import { useCallback, useEffect, useState } from "react";
import { PeoplePage, PeopleParams } from "../types";
import { getPeople } from "../api/characters";

export const useCharacters = (params: PeopleParams | undefined) => {
  const [people, setPeople] = useState<PeoplePage | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const fetchPeople = useCallback(() => {
    setLoading(true);

    getPeople(params)
      .then(({ data }) => {
        setPeople(data);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, [params, setPeople]);

  useEffect(() => {
    fetchPeople();

    return () => {
      setPeople(undefined);
    };
  }, [params, fetchPeople]);

  return { characters: people, loading };
};
