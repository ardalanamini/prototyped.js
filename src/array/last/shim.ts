import { addPrototype } from "../../utils.js";
import last from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Returns the last item of the array
     * @example
     * [1, 2, 3].last(); // 3
     */
    last(): T;
  }
}

addPrototype(Array, "last", last);
