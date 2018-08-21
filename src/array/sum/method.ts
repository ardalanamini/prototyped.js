import { pathToKeys } from "../../utils";

const method = <T = any>(arr: T[], path?: string): number => {
  if (path) {
    const keys = pathToKeys(path);

    const reducer = (item: T) => keys.reduce((prev, cur) => (prev && (prev as any)[cur]) || 0, item);

    return arr.reduce((prev, cur) => prev + reducer(cur), 0);
  }

  return arr.reduce((prev: any, cur: any) => prev + cur, 0);
};

export = method;
