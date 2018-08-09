import * as method from "./method";

declare global {
  interface Date {
    equals(value: any): boolean;
  }
}

/**
 * Checks if the date is equal to the given value
 * @memberof Date
 * @param {*} value
 * @returns {Boolean}
 * @example
 * (new Date()).equals(new Date()); // false
 */
Date.prototype.equals = function(value) {
  return method(this, value);
};
