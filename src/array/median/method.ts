import { pathToKeys } from "../../utils";

const method = <T = any>(arr: T[], path?: string): number => {
  const items = [...arr].sort((a: any, b: any) => a - b);
  const half = Math.floor(items.length / 2);

  let reducer = (item: T): any => item;

  if (path) {
    const keys = pathToKeys(path);

    reducer = (item: T) =>
      keys.reduce((prev, curr) => (prev && (prev as any)[curr]) || prev, item);
  }

  if (items.length % 2) return reducer(items[half]);

  return (reducer(items[half - 1]) + reducer(items[half])) / 2;
};

export = method;
