import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
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
addPrototype(Array, "toCSV", method);
