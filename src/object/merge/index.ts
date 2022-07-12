import keys from "../keys/index.js";

const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Creates a new object from the combination of two or more objects
 * @param obj
 * @param objects
 * @example
 * const object = {
 *   a: [{ x: 2 }, { y: 4 }],
 *   b: 1
 * };
 * const other = {
 *   a: { z: 3 },
 *   b: [2, 3],
 *   c: "foo"
 * };
 * merge(object, other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: "foo" }
 */
export default function merge(
  obj: Record<string, unknown>,
  ...objects: Record<string, unknown>[]
): Record<string, unknown> {
  return [obj, ...objects].reduce(
    (prev: Record<string, unknown>, obj2: Record<string, unknown>) =>
      keys(obj2).reduce((a, k) => {
        prev[k] = hasOwnProperty.call(prev, k)
          ? [].concat(prev[k] as never).concat(obj2[k] as never)
          : obj2[k];

        return prev;
      }, {}),
    {},
  );
}
