import * as method from "./method";

declare global {
  interface Array<T> {
    nest(id?: any, link?: string): object[];
  }
}

/**
 * Given a flat array of objects linked to one another, it will nest them recursively
 * @memberof Array
 * @param {*} id
 * @param {string} link
 * @returns {Object[]}
 * @example
 * const comments = [
 *   { id: 1, parent_id: null },
 *   { id: 2, parent_id: 1 },
 *   { id: 3, parent_id: 1 },
 *   { id: 4, parent_id: 2 },
 *   { id: 5, parent_id: 4 }
 * ];
 * comments.nest(); // [{ id: 1, parent_id: null, children: [...] }]
 */
Array.prototype.nest = function(id, link): any {
  return method(this, id, link);
};
