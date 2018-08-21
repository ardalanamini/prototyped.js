import * as method from "./method";

declare global {
  interface Array<T> {
    merge(arr: any[]): void;
  }
}

/**
 * Merges array with the given array
 * @memberof Array
 * @param {*} value
 * @example
 * var myArray = [1, 2, 3]
 * myArray.merge([0, 6 , 2]); // myArray => [1, 2, 3, 0, 6, 2]
 */
Array.prototype.merge = function(value) {
  return method(this, value);
};
