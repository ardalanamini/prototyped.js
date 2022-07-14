import { addPrototype } from "../../utils.js";
import zip from "./index.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {

    /**
     * Creates an array of elements, grouped based on the position in the original arrays
     * @param arrays
     * @example
     * ['a', 'b'].zip([1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
     * @example
     * ['a'].zip([1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]
     */
    zip(...arrays: unknown[][]): unknown[][];
  }
}

addPrototype(Array, "zip", zip);
