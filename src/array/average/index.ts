import { PathT } from "../../utils.js";
import sum from "../sum/index.js";

/**
 * Returns the average value of a given path
 * @param array
 * @param [path]
 * @example
 * average([1, 2, 3]); // 2
 * @example
 * average([{a: 1}, {a: 2}, {a: 3}], "a"); // 2
 * @example
 * average([{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}], "a.b"); // 2
 */
export default function average<Value, Path extends PathT<Value> = PathT<Value>>(array: Value[], path?: Path): number {
  return sum(array, path) / array.length;
}
