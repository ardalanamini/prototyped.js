import { pathToKeys } from "../../utils";

const method = <T = any>(arr: T[], path: string, separator = ", "): string => {
  const keys = pathToKeys(path);

  return arr
    .map((item) => keys.reduce((prev, cur) => (prev && (prev as any)[cur]) || undefined, item))
    .filter(Boolean)
    .join(separator);
};

export = method;
