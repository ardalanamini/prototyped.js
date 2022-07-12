import { addPrototype } from "../../utils.js";
import initial from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Returns all the elements of an array except the last one
     * @example
     * [1, 2, 3].initial(); // [1, 2]
     */
    initial(): T[];
  }
}

addPrototype(Array, "initial", initial);
