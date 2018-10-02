import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface String {
    contains(str: string, sensitive?: boolean): boolean;
  }
}

/**
 * Find out if the string contains the argument at any position
 * @memberof String
 * @param {String} str
 * @param {Boolean} [sensitive=false]
 * @returns {Boolean}
 * @example
 * 'javaScript & typescript'.contains('Typescript'); // true
 * 'javaScript & typescript'.contains('Typescript', true); // false
 */
String.prototype.contains = utils.methodToPrototype(method);
