import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface String {
    decapitalize(allWords?: boolean): string;
  }
}

/**
 * Returns the decapitalized string
 * @memberof String
 * @param {Boolean} [allWords=false]
 * @returns {String}
 * @example
 * 'Foo Bar'.decapitalize(); // 'foo Bar'
 * 'Hello World'.decapitalize(true); // 'hello world'
 */
String.prototype.decapitalize = utils.methodToPrototype(method);
