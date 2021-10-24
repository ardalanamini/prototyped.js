import unwind from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    unwind(path: string): unknown[];
  }
}

/**
 * Returns the item at a given index. If the index does not exist, def is returned
 * @memberof Array.prototype
 * @function unwind
 * @param {String} path
 * @returns {*}
 * @example
 * [{ foo: ["bar 1", "bar 2"] }, { foo: ["bar 3", "bar 4", "bar 5"] }].unwind("foo");
 * // [{ foo: "bar 1" }, { foo: "bar 2" }, { foo: "bar 3" }, { foo: "bar 4" }, { foo: "bar 5" }]
 */
addPrototype(Array, "unwind", unwind);
