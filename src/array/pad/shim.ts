import { addPrototype } from "../../utils.js";
import pad from "./index.js";

declare global {
  interface Array<T> {

    /**
     * FillS the array with the given value until the array reaches the specified size
     * @param size
     * @param [value=0]
     * @example
     * [1, 2, 3].pad(5, 0); // [1, 2, 3, 0, 0]
     * @example
     * [1, 2, 3].pad(-5, 0); // [0, 0, 1, 2, 3]
     */
    pad(size: number, value?: T): T[];
  }
}

addPrototype(Array, "pad", pad);
