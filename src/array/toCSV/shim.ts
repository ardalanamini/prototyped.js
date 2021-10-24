import toCSV from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    toCSV(delimiter?: string): string;
  }
}

/**
 * Converts a 2D array to a comma-separated values (CSV) string
 * @memberof Array.prototype
 * @function delimiter
 * @param {String} [delimiter=","]
 * @returns {String}
 * @example
 * [['a', 'b'], ['c', 'd']].toCSV(); // '"a","b"\n"c","d"'
 * [['a', 'b'], ['c', 'd']].toCSV(';'); // '"a";"b"\n"c";"d"'
 */
addPrototype(Array, "toCSV", toCSV);
