import { pathToKeys } from "../../utils";

const method = (arr: any[], path?: string): number => {
  let reducer = (item: any) => item;

  if (path) {
    const keys = pathToKeys(path);

    reducer = (item: any) => keys.reduce((prev, curr) => (prev && prev[curr]) || +Infinity, item);
  }

  return arr.reduce((prev, cur) => Math.min(prev, reducer(cur)), +Infinity);
};

export = method;
