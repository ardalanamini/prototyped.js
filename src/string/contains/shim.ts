import contains from ".";
import { addPrototype } from "../../utils";

declare global {
  interface String {
    contains(str: string, sensitive?: boolean): boolean;
  }
}

/**
 * Find out if the string contains the argument at any position
 * @memberof String.prototype
 * @function contains
 * @param {String} str
 * @param {Boolean} [sensitive=false]
 * @returns {Boolean}
 * @example
 * 'javaScript & typescript'.contains('Typescript'); // true
 * 'javaScript & typescript'.contains('Typescript', true); // false
 */
addPrototype(String, "contains", contains);
