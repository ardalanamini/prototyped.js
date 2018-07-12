import { pathToKeys } from "../../utils";

const method = (arr: any[], path: string): any[] => {
  const keys = pathToKeys(path);

  return arr.map((item) => keys.reduce((prev, cur) => (prev && prev[cur]) || undefined, item));
};

export = method;
