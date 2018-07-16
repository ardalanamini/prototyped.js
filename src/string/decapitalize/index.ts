import * as method from "./method";

declare global {
  interface String {
    decapitalize(allWords?: boolean): string;
  }
}

/**
 * Returns the decapitalized string
 * @memberof String
 * @param {boolean} [allWords=false]
 * @returns {string}
 * @example
 * 'Foo Bar'.decapitalize(); // 'foo Bar'
 * 'Hello World'.decapitalize(true); // 'hello world'
 */
String.prototype.decapitalize = function(allWords) {
  return method(this as string, allWords);
};
