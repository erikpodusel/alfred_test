import { swapi } from "../swapi";
import { useEffect, useState } from "react";

export const useCharacters = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPeople(page)
      .then((response) => {
        const responseData = response.data;

        console.log("responseData ->", responseData);
      })
      .catch(console.error);

    return () => {};
  }, [page]);

  const getPeople = async (page: number) => {
    return swapi.get(`people?page=${page}`);
  };

  return {};
};
