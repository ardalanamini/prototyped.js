import { PathT, pathToKeys } from "../../utils";

export default min;

function min<
  Value extends Record<string, unknown>,
  Path extends PathT<Value> = never
>(array: Value[], path?: Path): number;
function min<Value>(array: Value[]): number;
function min<Value>(arr: Value[], path?: string): number {
  let reducer = (item: Value): any => item;

  if (path) {
    const keys = pathToKeys(path);

    reducer = (item: Value) =>
      keys.reduce(
        (prev, curr) => (prev && (prev as any)[curr]) || +Infinity,
        item,
      );
  }

  return arr.reduce((prev, cur) => Math.min(prev, reducer(cur)), +Infinity);
}
