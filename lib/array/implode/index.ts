import * as method from "./method";

declare global {
  interface Array<T> {
    implode(key: string, separator?: string): string;
  }
}

/**
 * It's like join but u get to git it which keys to join
 * @memberof Array
 * @param {String} key
 * @param {String} [separator=", "]
 * @returns {String}
 * @example
 * [{a: {b: 'first'}}, {a: {b: 'second'}}, {a: {b: 'third'}}].implode('a.b', ', '); // 'first, second, third'
 */
Array.prototype.implode = function(key, separator) {
  return method(this, key, separator);
};
