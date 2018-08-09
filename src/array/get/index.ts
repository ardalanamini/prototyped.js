import * as method from "./method";

declare global {
  interface Array<T> {
    get(index: number, def?: any): T | null;
  }
}

/**
 * Returns the item at a given index. If the index does not exist, def is returned
 * @memberof Array
 * @param {Number} index
 * @param {*} [def=undefined]
 * @returns {*}
 * @example
 * [1, 2, 3].get(0, 'default value'); // 1
 * [1, 2, 3].get(4, 0); // 0
 */
Array.prototype.get = function(index, def) {
  return method(this, index, def);
};
