import { addPrototype, PathT } from "../../utils.js";
import median from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Returns the median value of a given path
     * @param [path]
     * @example
     * [1, 1, 2, 4].median(); // 1.5
     * @example
     * [{foo: 10}, {foo: 10}, {foo: 20}, {foo: 40}].median('foo'); // 15
     */
    median(path?: T extends Record<string, unknown> ? PathT<T> : never): number;
  }
}

addPrototype(Array, "median", median);
