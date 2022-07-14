import { PathT, addPrototype } from "../../utils.js";
import sum from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Returns the sum value of a given path
     * @param [path]
     * @example
     * [1, 2, 3].sum(); // 6
     * @example
     * [{a: 1}, {a: 2}, {a: 3}].sum('a'); // 6
     * @example
     * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].sum('a.b'); // 6
     */
    sum(path?: T extends Record<string, unknown> ? PathT<T> : never): number;
  }
}

addPrototype(Array, "sum", sum);
