import * as method from "./method";

declare global {
  interface Number {
    equals(value: any): boolean;
  }
}

/**
 * Checks if the number is equal to the given value
 * @memberof Number
 * @param {*} value
 * @returns {Boolean}
 * @example
 * (22).equals("22"); // false
 */
Number.prototype.equals = function(value) {
  return method(this as number, value);
};
