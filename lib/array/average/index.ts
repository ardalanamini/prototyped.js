import * as method from "./method";

export { };

declare global {
  interface Array<T> {
    average(key?: string): number;
    avg(key?: string): number;
  }
}

/**
 * Returns the average value of a given key
 * @memberof Array
 * @param {String} [key]
 * @returns {number}
 * @example
 * [1, 2, 3].average(); // 2
 * [{a: 1}, {a: 2}, {a: 3}].average("a"); // 2
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].average("a.b"); // 2
 */
Array.prototype.average = function(key) {
  return method(this, key);
};

/**
 * An alias of Array.prototype.average
 * @memberof Array
 * @param {String} [key]
 * @returns {number}
 * @example
 * [1, 2, 3].avg(); // 2
 * [{a: 1}, {a: 2}, {a: 3}].avg("a"); // 2
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].avg("a.b"); // 2
 */
Array.prototype.avg = Array.prototype.average;
