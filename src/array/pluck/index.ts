import { PathT, pathToKeys } from "../../utils.js";

/**
 * Returns all of the values for the given path
 * @param array
 * @param path
 * @example
 * pluck([{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}], 'a'); // [{b: 1}, {b: 2}, {b: 3}]
 * @example
 * pluck([{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}], 'a.b'); // [1, 2, 3]
 */
export default function pluck<
  Value extends Record<string, unknown>,
  Path extends PathT<Value>,
>(array: Value[], path: Path): unknown[] {
  const keys = pathToKeys(path);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition,no-undefined
  return array.map(item => keys.reduce((prev, cur) => (prev && (prev as any)[cur]) || undefined, item));
}
