import * as method from "./method";

declare global {
  interface Date {
    equals(value: any): boolean;
  }
}

/**
 * Checks if the date is equal to the given value
 * @memberof Boolean
 * @param {*} value
 * @returns {boolean}
 * @example
 * (new Date()).equals(new Date()); // false
 */
Date.prototype.equals = function(value) {
  return method(this, value);
};
