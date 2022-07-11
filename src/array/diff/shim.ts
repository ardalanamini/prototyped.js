import { addPrototype } from "../../utils.js";
import diff from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Returns the difference between this and another array
     * if `comp` is given, filters out all values from an array for which the comparator function
     * does not return true
     * @param array
     * @param [comp]
     * @example
     * [1, 2, 3].diff([1, 2, 4]); // [3]
     * @example
     * [1, 1.2, 1.5, 3, 0].diff([1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
     */
    diff<P>(array: P[], comp?: (a: T, b: P) => boolean): T[];
  }
}

addPrototype(Array, "diff", diff);
