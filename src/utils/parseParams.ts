import { isObject } from "./isObject";
import { isValueDefined } from "./isValueDefined";

/**
 * Return parsed parameters, just pass object with key-value pairs and it will parse the object into params like
 * @param params - Object to parse
 * @returns Parsed params like this ?target_id=sewing&ready=true
 */
export function parseParams<T extends Object | undefined>(params: T) {
  if (!params) return "";
  if (!isObject(params)) return "";

  const newParams = Object.entries(params).filter(([key, value]) => {
    return key.length && isValueDefined(value);
  });

  const parsed = newParams.length ? Object.fromEntries(newParams as any) : {};

  const parsedParams = new URLSearchParams(parsed).toString();

  return parsedParams.length > 0 ? "?" + parsedParams : parsedParams;
}
