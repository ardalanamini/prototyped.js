import { PathT, addPrototype } from "../../utils.js";
import average from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Returns the average value of a given path
     * @param [path]
     * @example
     * [1, 2, 3].average(); // 2
     * @example
     * [{a: 1}, {a: 2}, {a: 3}].average("a"); // 2
     * @example
     * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].average("a.b"); // 2
     */
    average(
      path?: T extends Record<string, unknown> ? PathT<T> : never,
    ): number;

    /**
     * An alias of Array.prototype.average
     * @param [path]
     * @example
     * [1, 2, 3].avg(); // 2
     * @example
     * [{a: 1}, {a: 2}, {a: 3}].avg("a"); // 2
     * @example
     * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].avg("a.b"); // 2
     */
    avg(path?: T extends Record<string, unknown> ? PathT<T> : never): number;
  }
}

addPrototype(Array, ["average", "avg"], average);
