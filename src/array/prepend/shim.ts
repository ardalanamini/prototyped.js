import { addPrototype } from "../../utils.js";
import prepend from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Adds an item to the beginning of the array
     * @param value
     * @example
     * let myArray = [1, 2, 3]
     * myArray.prepend(0); // myArray => [0, 1, 2, 3]
     */
    prepend(value: T): number;
  }
}

addPrototype(Array, "prepend", prepend);
