import { PathT, pathToKeys } from "../../utils.js";

export default sum;

function sum<Value, Path extends PathT<Value> = PathT<Value>>(arr: Value[], path?: Path): number {
  if (path === undefined) return arr.reduce((prev, cur: any) => prev + cur, 0);

  const keys = pathToKeys(path);

  const reducer = (item: Value): number =>
    keys.reduce(
      (prev, cur) => (prev && (prev as any)[cur]) || 0,
      item,
    ) as any;

  return arr.reduce((prev, cur) => prev + reducer(cur), 0);
}
