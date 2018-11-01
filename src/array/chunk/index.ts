import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface Array<T> {
    chunk(size: number): T[][];
  }
}

/**
 * Chunks the array into smaller arrays of a specified size
 * @memberof Array.prototype
 * @function chunk
 * @param {Number} size
 * @returns {Array[]}
 * @example
 * [1, 2, 3, 4, 5].chunk(2); // [[1,2],[3,4],[5]]
 */
addPrototype(Array, "chunk", method);
