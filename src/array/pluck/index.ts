import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    pluck(path: string): any[];
  }
}

/**
 * Returns all of the values for the given path
 * @memberof Array
 * @param {String} path
 * @returns {Array}
 * @example
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck('a'); // [{b: 1}, {b: 2}, {b: 3}]
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck('a.b'); // [1, 2, 3]
 */
Array.prototype.pluck = utils.methodToPrototype(method);
