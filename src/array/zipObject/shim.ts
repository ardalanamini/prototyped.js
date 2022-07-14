import { addPrototype } from "../../utils.js";
import zipObject from "./index.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {

    /**
     * Given an array of valid property identifiers and an array of values,
     * return an object associating the properties to the values
     * @param array
     * @example
     * ['a', 'b', 'c'].zipObject([1, 2]); // {a: 1, b: 2, c: undefined}
     * @example
     * ['a', 'b'].zipObject([1, 2, 3]); // {a: 1, b: 2}
     */
    zipObject(array: unknown[]): Record<string, unknown>;
  }
}

addPrototype(Array, "zipObject", zipObject);
