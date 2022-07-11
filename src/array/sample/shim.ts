import { addPrototype } from "../../utils.js";
import sample from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Returns a random element from an array
     * @example
     * [3, 7, 9, 11].sample(); // 9
     */
    sample(): T;
  }
}

addPrototype(Array, "sample", sample);
