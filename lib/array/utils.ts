import { pathToKeys } from "../utils";

export const filter = (arr: any[], path: string | undefined, fn: any) => {
  if (path) {
    const keys = pathToKeys(path);

    const reducer = (item: any) => keys.reduce((prev, curr) => prev[curr], item);

    return arr.filter((item, index, items) => fn(reducer(item), index, items));
  }

  return arr.filter(fn);
};
