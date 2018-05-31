import { pathToKeys } from "../../utils";

const method = (arr: any[], path: string, separator = ", "): string => {
  const keys = pathToKeys(path);

  return arr
    .map((item) => keys.reduce((prev, cur) => (prev && prev[cur]) || undefined, item))
    .filter(Boolean)
    .join(separator);
};

export = method;
