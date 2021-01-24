import { PathT, pathToKeys } from "../../utils";

export default max;

function max<
  Value extends Record<string, unknown>,
  Path extends PathT<Value> = never
>(array: Value[], path?: Path): number;
function max<Value>(array: Value[]): number;
function max<Value>(arr: Value[], path?: string): number {
  let reducer = (item: Value): any => item;

  if (path) {
    const keys = pathToKeys(path);

    reducer = (item: Value) =>
      keys.reduce(
        (prev, curr) => (prev && (prev as any)[curr]) || -Infinity,
        item,
      );
  }

  return arr.reduce((prev, cur) => Math.max(prev, reducer(cur)), -Infinity);
}
