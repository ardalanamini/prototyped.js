import * as method from "./method";

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
String.prototype.lines = function() {
  return method(this as string);
};
