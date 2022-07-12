import { addPrototype } from "../../utils.js";
import first from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Returns the first item of the array
     * @example
     * [1, 2, 3].first(); // 1
     */
    first(): T[] extends [infer U, ...unknown[]] ? U : T;
  }
}

addPrototype(Array, "first", first);
