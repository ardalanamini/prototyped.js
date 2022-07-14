import { addPrototype } from "../../utils.js";
import compact, { CompactT } from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Removes falsey values from the array
     * @example
     * [0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34].compact(); // [ 1, 2, 3, 'a', 's', 34 ]
     */
    compact(): Array<CompactT<T>>;
  }
}

addPrototype(Array, "compact", compact);
