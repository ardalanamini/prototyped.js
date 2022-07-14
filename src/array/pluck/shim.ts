import { PathT, addPrototype } from "../../utils.js";
import pluck from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Returns all of the values for the given path
     * @param path
     * @example
     * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck('a'); // [{b: 1}, {b: 2}, {b: 3}]
     * @example
     * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck('a.b'); // [1, 2, 3]
     */
    pluck(
      path: T extends Record<string, unknown> ? PathT<T> : never,
    ): unknown[];
  }
}

addPrototype(Array, "pluck", pluck);
