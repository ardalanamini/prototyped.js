import isString from "../../string/isString";
import { pathToKeys } from "../../utils";

export default function sortBy<T>(
  arr: T[],
  fn: string | ((value: T) => number),
): T[] {
  let reducer = fn as (value: T) => number;

  if (isString(fn)) {
    const keys = pathToKeys(fn);

    reducer = (value): number =>
      keys.reduce((prev, cur) => (prev as any)[cur], value) as any;
  }

  return arr.sort((a, b) => reducer(a) - reducer(b));
}
