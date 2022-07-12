import { PathT, pathToKeys } from "../../utils.js";

export default sum;

/**
 * Returns the sum value of a given path
 * @param arr
 * @param [path]
 * @example
 * sum([1, 2, 3]); // 6
 * @example
 * sum([{a: 1}, {a: 2}, {a: 3}], 'a'); // 6
 * @example
 * sum([{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}], 'a.b'); // 6
 */
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
