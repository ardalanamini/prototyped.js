import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface String {
    lines(): string[];
  }
}

/**
 * Splits a multiline string into an array of lines
 * @memberof String
 * @returns {String[]}
 * @example
 * 'This\nis a\nmultiline\nstring.\n'.lines(); // ['This', 'is a', 'multiline', 'string.' , '']
 */
String.prototype.lines = utils.methodToPrototype(method);
