import { addPrototype } from "../../utils.js";
import countBy from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Groups the elements of an array based on the given function and
     * returns the count of elements in each group
     * @param fn
     * @example
     * [6.1, 4.2, 6.3].countBy(Math.floor); // { 4: 1, 6: 2 }
     * @example
     * ['one', 'two', 'three'].countBy('length'); // { 3: 2, 5: 1 }
     */
    countBy(
      fn: string | ((value: T, index: number, arr: T[]) => any),
    ): Record<string, number>;
  }
}

addPrototype(Array, "countBy", countBy);
