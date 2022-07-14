import { addPrototype } from "../../utils.js";
import everyNth from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Returns every nth element in an array
     * @param n
     * @example
     * [1, 2, 3, 4, 5, 6].everyNth(2); // [ 2, 4, 6 ]
     */
    everyNth(n: number): T[];
  }
}

addPrototype(Array, "everyNth", everyNth);
