import { PeoplePage, PeopleParams } from "../types";
import { swapi } from "../swapi";

export const getPeople = async (
  params: PeopleParams | undefined,
): Promise<{ data: PeoplePage }> => {
  return swapi.get(
    `people?page=${params?.page ?? 1}&${params?.attribute ?? "search"}=${params?.search ?? ""}`,
  );
};
