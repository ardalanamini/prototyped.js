import { deepClone } from "../../utils.js";

/**
 * Creates a (deep) clone of the object
 * @param obj
 * @param [deep=false]
 * @example
 * const a = { foo: 'bar', obj: { a: 1, b: 2 } };
 * const b = clone(a, true); // a !== b, a.obj !== b.obj
 */
export default function clone<Value extends Record<string, unknown>>(
  obj: Value,
  deep = false,
): Value {
  return deep ? deepClone(obj) : ({ ...obj });
}
