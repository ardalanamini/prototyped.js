import { PathT, pathToKeys } from "../../utils";

export default sum;

function sum<
  Value extends Record<string, unknown>,
  Path extends PathT<Value> = never
>(arr: Value[], path?: Path): number;
function sum<Value>(arr: Value[]): number;
function sum<Value>(arr: Value[], path?: string): number {
  if (path) {
    const keys = pathToKeys(path);

    const reducer = (item: Value): number =>
      keys.reduce(
        (prev, cur) => (prev && (prev as any)[cur]) || 0,
        item,
      ) as any;

    return arr.reduce((prev, cur) => prev + reducer(cur), 0);
  }

  return arr.reduce((prev: any, cur) => prev + cur, 0);
}
