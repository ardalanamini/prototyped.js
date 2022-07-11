import { addPrototype } from "../../utils.js";
import tail from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Returns all elements in an array except for the first one
     * @example
     * [1, 2, 3].tail(); // [2, 3]
     */
    tail(): T[];
  }
}

addPrototype(Array, "tail", tail);
