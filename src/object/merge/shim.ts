import { addPrototype } from "../../utils.js";
import merge from "./index.js";

declare global {
  interface Object {

    /**
     * Creates a new object from the combination of two or more objects
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
     * object.$merge(other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: "foo" }
     */
    $merge(...objects: Array<Record<string, unknown>>): Record<string, unknown>;
  }
}

addPrototype(Object, "$merge", merge);
