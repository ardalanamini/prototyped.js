import { addPrototype } from "../../utils.js";
import equals from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Checks if the array is equal to the given value
     * @param value
     * @example
     * [1,2,3].equals([2,1,3]); // false
     */
    equals(value: unknown): value is T[];
  }
}

addPrototype(Array, "equals", equals);
