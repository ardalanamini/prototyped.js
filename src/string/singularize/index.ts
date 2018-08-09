import * as method from "./method";

declare global {
  interface String {
    singularize(): string;
  }
}

/**
 * Returns the singular form of the word
 * @memberof String
 * @returns {String}
 * @example
 * 'apple'.singularize(); // 'apple'
 * 'apples'.singularize(); // 'apple'
 * 'person'.singularize(); // 'person'
 * 'people'.singularize(); // 'person'
 */
String.prototype.singularize = function() {
  return method(this as string);
};
