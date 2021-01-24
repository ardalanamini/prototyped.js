import { PathT, pathToKeys } from "../../utils";

export default median;

function median<
  Value extends Record<string, unknown>,
  Path extends PathT<Value> = never
>(array: Value[], path?: Path): number;
function median<Value>(array: Value[]): number;
function median<Value>(arr: Value[], path?: string): number {
  const items = [...arr].sort((a: any, b: any) => a - b);
  const half = Math.floor(items.length / 2);

  let reducer = (item: Value): any => item;

  if (path) {
    const keys = pathToKeys(path);

    reducer = (item: Value) =>
      keys.reduce((prev, curr) => (prev && (prev as any)[curr]) || prev, item);
  }

  if (items.length % 2) return reducer(items[half]);

  return (reducer(items[half - 1]) + reducer(items[half])) / 2;
}
