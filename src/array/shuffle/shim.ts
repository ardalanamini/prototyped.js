import { addPrototype } from "../../utils.js";
import shuffle from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Randomizes the order of the values of an array, returning a new array
     * @example
     * const foo = [1, 2, 3];
     * foo.shuffle(); // [2,3,1], foo = [1,2,3]
     */
    shuffle(): T[];
  }
}

addPrototype(Array, "shuffle", shuffle);
