import { addPrototype } from "../../utils";
import * as method from "./method";

declare global {
  interface Object {
    $merge(...objects: object[]): object;
  }
}

/**
 * Creates a new object from the combination of two or more objects
 * @memberof Object.prototype
 * @function $merge
 * @param {...Object} objects
 * @returns {Object}
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
 * object.$merge(other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: "foo" }
 */
addPrototype(Object, "$merge", function(this: object, ...objects: object[]) {
  return method(this, ...objects);
});
