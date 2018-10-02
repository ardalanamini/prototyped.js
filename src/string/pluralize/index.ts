import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface String {
    pluralize(count?: number): string;
  }
}

/**
 * Returns the singular or plural form of the word based on the input number
 * @memberof String
 * @param {Number} [count]
 * @returns {String}
 * @example
 * 'apple'.pluralize(); // 'apples'
 * 'apple'.pluralize(0); // 'apples'
 * 'apple'.pluralize(1); // 'apple'
 * 'apple'.pluralize(2); // 'apples'
 * 'person'.pluralize(2); // 'people'
 * 'people'.pluralize(1); // 'person'
 */
String.prototype.pluralize = utils.methodToPrototype(method);
