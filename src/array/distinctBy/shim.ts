import { addPrototype } from "../../utils.js";
import distinctBy from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Returns all the distinct values of an array
     * @param fn
     * @example
     * [1, 2, 2, 3, 4, 4, 5].distinctBy((a, b) => a === b); // [1,2,3,4,5]
     */
    distinctBy(fn: (a: T, b: T) => boolean): T[];
  }
}

addPrototype(Array, "distinctBy", distinctBy);
