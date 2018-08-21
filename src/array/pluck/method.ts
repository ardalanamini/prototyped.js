import { pathToKeys } from "../../utils";

const method = <T = any>(arr: T[], path: string) => {
  const keys = pathToKeys(path);

  return arr.map((item) => keys.reduce((prev, cur) => (prev && (prev as any)[cur]) || undefined, item));
};

export = method;
