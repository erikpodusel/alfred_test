import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { isEqual } from "lodash";

/**
 * Caches changes and loads them on refresh
 * @param key - key for caching
 * @param initialValue - initial value of state
 * @return [state, setState] as normal useState hook
 */
export function useCachedState<T = undefined>(
  key: string,
  initialValue?: T,
): [T | undefined, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T | undefined>(initialValue);

  useEffect(() => {
    const cachedParams = localStorage.getItem(key);
    const parsedParams = cachedParams ? JSON.parse(cachedParams) : undefined;

    if (!state) {
      if (!parsedParams) return;

      setState(parsedParams);
      return;
    }

    if (isEqual(parsedParams, state)) return;

    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
