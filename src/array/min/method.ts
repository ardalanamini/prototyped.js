import { pathToKeys } from "../../utils";

const method = <T = any>(arr: T[], path?: string): number => {
  let reducer = (item: T): any => item;

  if (path) {
    const keys = pathToKeys(path);

    reducer = (item: T) => keys.reduce((prev, curr) => (prev && (prev as any)[curr]) || +Infinity, item);
  }

  return arr.reduce((prev, cur) => Math.min(prev, reducer(cur)), +Infinity);
};

export = method;
