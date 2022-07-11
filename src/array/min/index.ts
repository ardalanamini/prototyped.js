import { PathT, pathToKeys } from "../../utils.js";

export default min;

/**
 * Returns the minimum value of a given path
 * @param array
 * @param [path]
 * @example
 * min([{a: 1}, {a: 2}, {a: 3}], 'a'); // 1
 * @example
 * min([{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}], 'a.b'); // 1
 */
function min<
  Value extends Record<string, unknown>,
  Path extends PathT<Value> = never,
>(array: Value[], path?: Path): number;
/**
 * Returns the minimum value of a given path
 * @param array
 * @example
 * min([1, 2, 3]); // 1
 */
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
