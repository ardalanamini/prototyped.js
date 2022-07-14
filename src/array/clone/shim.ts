import { addPrototype } from "../../utils.js";
import clone from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Returns the cloned array
     * @param [deep=false]
     * @example
     * [1, 2, 3].clone(); // [1, 2, 3]
     */
    clone(deep?: boolean): T[];
  }
}

addPrototype(Array, "clone", clone);
