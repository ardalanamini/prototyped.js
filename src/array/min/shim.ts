import { addPrototype, PathT } from "../../utils.js";
import min from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Returns the minimum value of a given path
     * @param [path]
     * @example
     * [1, 2, 3].min(); // 1
     * @example
     * [{a: 1}, {a: 2}, {a: 3}].min('a'); // 1
     * @example
     * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].min('a.b'); // 1
     */
    min(path?: T extends Record<string, unknown> ? PathT<T> : never): number;
  }
}

addPrototype(Array, "min", min);
