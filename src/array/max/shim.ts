import { PathT, addPrototype } from "../../utils.js";
import max from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Returns the maximum value of a given path
     * @param [path]
     * @example
     * [1, 2, 3].max(); // 3
     * @example
     * [{a: 1}, {a: 2}, {a: 3}].max('a'); // 3
     * @example
     * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].max('a.b'); // 3
     */
    max(path?: T extends Record<string, unknown> ? PathT<T> : never): number;
  }
}

addPrototype(Array, "max", max);
