import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface String {
    capitalize(allWords?: boolean): string;
  }
}

/**
 * Returns the capitalized string
 * @memberof String
 * @param {Boolean} [allWords=false]
 * @returns {String}
 * @example
 * 'foo bar'.capitalize(); // 'Foo bar'
 * 'hello world'.capitalize(true); // 'Hello World'
 */
String.prototype.capitalize = utils.methodToPrototype(method);
