import implode from ".";
import { addPrototype, PathT } from "../../utils";

declare global {
  interface Array<T> {
    implode(
      path: T extends Record<string, unknown> ? PathT<T> : string,
      separator?: string,
    ): string;
  }
}

/**
 * It's like join but u get to tell it which keys to join
 * @memberof Array.prototype
 * @function implode
 * @param {String} path
 * @param {String} [separator=", "]
 * @returns {String}
 * @example
 * [{a: {b: 'first'}}, {a: {b: 'second'}}, {a: {b: 'third'}}].implode('a.b', ', ');
 * // 'first, second, third'
 */
addPrototype(Array, "implode", implode);
