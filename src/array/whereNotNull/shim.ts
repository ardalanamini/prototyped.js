import { addPrototype } from "../../utils.js";
import whereNotNull from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Filters the array
     * @param field
     * @example
     * [1, 2, 2, 3, null, undefined, 5].whereNotNull(); // [1,2,2,3,5]
     * @example
     * [{count:1}, {count:null}, {foo:15}].whereNotNull("count"); // [{count:1}]
     */
    whereNotNull(field?: string): T[];
  }
}

addPrototype(Array, "whereNotNull", whereNotNull);
