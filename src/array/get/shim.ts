import { addPrototype } from "../../utils.js";
import get from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Returns the item at a given index. If the index does not exist, def is returned
     * @param index
     * @param [fallback=null]
     * @example
     * [1, 2, 3].get(0, 'default value'); // 1
     * @example
     * [1, 2, 3].get(4, 0); // 0
     */
    get<F = null>(index: number, fallback?: F): F | T;
  }
}

addPrototype(Array, "get", get);
