import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    nest(link?: string, key?: string): object[];
  }
}

/**
 * Given a flat array of objects linked to one another, it will nest them recursively
 * @memberof Array
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
Array.prototype.nest = utils.methodToPrototype(method);
