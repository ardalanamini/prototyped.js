import { addPrototype } from "../../utils.js";
import intersect from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Returns a list of elements that exist in both arrays
     * @param array
     * @example
     * [1, 2, 3].intersect([4, 3, 2]); // [2,3]
     */
    intersect(array: unknown[]): T[];
  }
}

addPrototype(Array, "intersect", intersect);
