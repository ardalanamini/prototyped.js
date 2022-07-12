import values from "../values/index.js";

/**
 * Returns the target value in a nested JSON object, based on the given key
 * @param obj
 * @param target
 * @example
 * const data = {
 *  level1: {
 *   level2: {
 *    level3: 'some data'
 *   }
 *  }
 * };
 * dig(data, 'level3'); // 'some data'
 * dig(data, 'level4'); // undefined
 */
export default function dig(
  obj: Record<string, unknown>,
  target: string,
): unknown {
  if (target in obj) return obj[target];

  return values(obj).reduce((acc, val) => {
    if (acc !== undefined) return acc;

    if (typeof val === "object")
      return dig(val as Record<string, unknown>, target);
  }, undefined);
}
