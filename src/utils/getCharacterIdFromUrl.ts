/**
 *
 * @param url
 * @returns part of url that is a number
 */
export const getCharacterIdFromUrl = (url: string) => {
  return url.split("/").find((part) => Number(part) > 0);
};
