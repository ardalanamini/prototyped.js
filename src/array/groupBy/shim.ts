import { addPrototype } from "../../utils.js";
import groupBy from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Groups the elements of an array based on the given function
     * @param fn
     * @example
     * [6.1, 4.2, 6.3].groupBy(Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
     * @example
     * ['one', 'two', 'three'].groupBy('length'); // {3: ['one', 'two'], 5: ['three']}
     */
    groupBy(
      fn: string | ((item: T, index: number, array: T[]) => any),
    ): { [key: string]: T[] };
  }
}

addPrototype(Array, "groupBy", groupBy);
