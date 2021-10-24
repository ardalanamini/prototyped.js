import get from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    get<F = null>(index: number, fallback?: F): T | F;
  }
}

/**
 * Returns the item at a given index. If the index does not exist, def is returned
 * @memberof Array.prototype
 * @function get
 * @param {Number} index
 * @param {*} [def=undefined]
 * @returns {*}
 * @example
 * [1, 2, 3].get(0, 'default value'); // 1
 * [1, 2, 3].get(4, 0); // 0
 */
addPrototype(Array, "get", get);
