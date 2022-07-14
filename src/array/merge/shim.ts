import { addPrototype } from "../../utils.js";
import merge from "./index.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {

    /**
     * Merges array with the given array
     * @param arr
     * @example
     * let myArray = [1, 2, 3]
     * myArray.merge([0, 6 , 2]); // myArray => [1, 2, 3, 0, 6, 2]
     */
    merge(arr: unknown[]): void;
  }
}

addPrototype(Array, "merge", merge);
