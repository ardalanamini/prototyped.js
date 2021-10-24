import isString from "../../string/isString/index.js";
import { pathToKeys } from "../../utils.js";

export default function distinct<T>(
  array: T[],
  fn?: string | ((value: T, index: number, array: T[]) => any),
): T[] {
  if (!fn) return [...new Set(array)];

  if (isString(fn)) {
    const keys = pathToKeys(fn);

    fn = (value) => keys.reduce((prev: any, cur) => prev[cur], value);
  }

  const length = array.length;
  const found: { [value: string]: true | undefined } = {};
  const distinct: T[] = [];

  for (let i = 0; i < length; i++) {
    const value = array[i];
    const generatedValue = fn(value, i, array);

    if (found[generatedValue]) continue;

    found[generatedValue] = true;

    distinct.push(value);
  }

  return distinct;
}
