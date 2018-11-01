import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface String {
    lines(): string[];
  }
}

/**
 * Splits a multiline string into an array of lines
 * @memberof String.prototype
 * @function lines
 * @returns {String[]}
 * @example
 * 'This\nis a\nmultiline\nstring.\n'.lines(); // ['This', 'is a', 'multiline', 'string.' , '']
 */
addPrototype(String, "lines", method);
