import * as isString from "../../string/isString/method";
import { pathToKeys } from "../../utils";

const method = (arr: any[], fn?: string | ((value: any, index: number, array: any[]) => any)) => {
  if (!fn) return [...new Set(arr)];

  if (isString(fn)) {
    const keys = pathToKeys(fn);

    fn = (value) => keys.reduce((prev, cur) => prev[cur], value);
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
