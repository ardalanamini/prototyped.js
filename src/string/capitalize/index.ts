import * as method from "./method";

declare global {
  interface String {
    capitalize(allWords?: boolean): string;
  }
}

/**
 * Returns the capitalized string
 * @memberof String
 * @param {boolean} [allWords=false]
 * @returns {string}
 * @example
 * 'foo bar'.capitalize(); // 'Foo bar'
 * 'hello world'.capitalize(true); // 'Hello World'
 */
String.prototype.capitalize = function(allWords) {
  return method(this as string, allWords);
};
