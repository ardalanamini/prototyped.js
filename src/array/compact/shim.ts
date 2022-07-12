import compact, { CompactT } from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    /**
     * Removes falsey values from the array
     * @example
     * [0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34].compact(); // [ 1, 2, 3, 'a', 's', 34 ]
     */
    compact(): CompactT<T>[];
  }
}

addPrototype(Array, "compact", compact);
