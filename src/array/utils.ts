import { pathToKeys } from "../utils";

export const filter = <T = any>(arr: T[], path: string | undefined, fn: any) => {
  if (path) {
    const keys = pathToKeys(path);

    const reducer = (item: T) => keys.reduce((prev, curr) => (prev as any)[curr], item);

    return arr.filter((item, index, items) => fn(reducer(item), index, items));
  }

  return arr.filter(fn);
};
