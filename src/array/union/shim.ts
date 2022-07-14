import { addPrototype } from "../../utils.js";
import union from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Returns every element that exists in any of the two arrays once
     * @param array
     * @example
     * [1, 2, 3].union([4, 3, 2]); // [1,2,3,4]
     */
    union<P>(array: P[]): Array<P | T>;
  }
}

addPrototype(Array, "union", union);
