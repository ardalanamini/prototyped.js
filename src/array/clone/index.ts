import { deepClone } from "../../utils.js";

/**
 * Returns the cloned array
 * @param array
 * @param [deep=false]
 * @example
 * clone([1, 2, 3]); // [1, 2, 3]
 */
export default function clone<Value>(array: Value[], deep = false): Value[] {
  return deep ? deepClone(array) : [...array];
}
