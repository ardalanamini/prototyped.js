import capitalize from ".";
import { addPrototype } from "../../utils";

declare global {
  interface String {
    capitalize(allWords?: boolean): string;
  }
}

/**
 * Returns the capitalized string
 * @memberof String.prototype
 * @function capitalize
 * @param {Boolean} [allWords=false]
 * @returns {String}
 * @example
 * 'foo bar'.capitalize(); // 'Foo bar'
 * 'hello world'.capitalize(true); // 'Hello World'
 */
addPrototype(String, "capitalize", capitalize);
