import { PathT, pathToKeys } from "../../utils.js";

export default max;

/**
 * Returns the maximum value of a given path
 * @param array
 * @param [path]
 * @example
 * max([{a: 1}, {a: 2}, {a: 3}], 'a'); // 3
 * @example
 * max([{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}], 'a.b'); // 3
 */
function max<
  Value extends Record<string, unknown>,
  Path extends PathT<Value> = never,
>(array: Value[], path?: Path): number;
/**
 * Returns the maximum value of a given path
 * @param array
 * @example
 * max([1, 2, 3]); // 3
 */
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
