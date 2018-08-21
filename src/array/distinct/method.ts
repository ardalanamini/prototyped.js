import * as isString from "../../string/isString/method";
import { pathToKeys } from "../../utils";

const method = <T = any>(arr: T[], fn?: string | ((value: T, index: number, array: T[]) => any)) => {
  if (!fn) return [...new Set(arr)];

  if (isString(fn)) {
    const keys = pathToKeys(fn);

    fn = (value) => keys.reduce((prev, cur) => (prev as any)[cur], value);
  }

  const length = arr.length;
  const distinct: any[] = [];
  const found: { [value: string]: boolean | undefined } = {};

  for (let i = 0; i < length; i++) {
    const value = arr[i];
    const generatedValue = fn(value, i, arr);

    if (found[generatedValue]) continue;

    found[generatedValue] = true;

    distinct.push(value);
  }

  return distinct;
};

export = method;
