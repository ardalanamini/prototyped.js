import * as isString from "../../string/isString/method";
import { pathToKeys } from "../../utils";

const method = (arr: any[], fn: string | ((value: any) => number)) => {
  let reducer = fn as ((value: any) => number);

  if (isString(fn)) {
    const keys = pathToKeys(fn);

    reducer = (value: any) => keys.reduce((prev, cur) => prev[cur], value);
  }

  return arr.sort((a, b) => reducer(a) - reducer(b));
};

export = method;
