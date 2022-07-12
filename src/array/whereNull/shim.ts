import { addPrototype } from "../../utils.js";
import whereNull from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Filters the array
     * @example
     * [1, 2, 2, 3, null, undefined, 5].whereNull(); // [null, undefined]
     */
    whereNull(): Array<null & undefined>;

    /**
     * Filters the array
     * @param field
     * @example
     * [{count:1}, {count:null}, {foo:15}].whereNull("count"); // [{count:null},{foo:15}]
     */
    whereNull(field: string): T[];
  }
}

addPrototype(Array, "whereNull", whereNull);
