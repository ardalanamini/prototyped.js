import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    nest(link?: string, key?: string): Record<string, unknown>[];
  }
}

/**
 * Given a flat array of objects linked to one another, it will nest them recursively
 * @memberof Array.prototype
 * @function nest
 * @param {String} link
 * @param {String} key
 * @returns {Object[]}
 * @example
 * const comments = [
 *   { id: 1, comment_id: null },
 *   { id: 2, comment_id: 1 },
 *   { id: 3, comment_id: 1 },
 *   { id: 4, comment_id: 2 },
 *   { id: 5, comment_id: 4 }
 * ];
 * comments.nest("comment_id"); // [{ id: 1, comment_id: null, children: [...] }]
 */
addPrototype(Array, "nest", method);
