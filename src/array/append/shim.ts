import { addPrototype } from "../../utils.js";
import append from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Same as push but uses concat
     * @param value
     * @example
     * const myArray = [1, 2, 3]
     * myArray.append(0); // myArray => [1, 2, 3, 0]
     */
    append(value: T): number;
  }
}

addPrototype(Array, "append", append);
