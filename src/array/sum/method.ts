import { pathToKeys } from "../../utils";

const method = (arr: any[], path?: string): number => {
  if (path) {
    const keys = pathToKeys(path);

    const reducer = (item: any) => keys.reduce((prev, cur) => (prev && prev[cur]) || 0, item);

    return arr.reduce((prev, cur) => prev + reducer(cur), 0);
  }

  return arr.reduce((prev, cur) => prev + cur, 0);
};

export = method;
