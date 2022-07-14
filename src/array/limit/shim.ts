import { addPrototype } from "../../utils.js";
import limit from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Limits the array
     * @alias take
     * @param [limit]
     * @example
     * [2, 1, 2, 5].limit(2); // [2,1]
     */
    limit(limit?: number): T[];

    /**
     * Limits the array
     * @alias limit
     * @param [limit]
     * @example
     * [2, 1, 2, 5].take(2); // [2,1]
     */
    take(limit?: number): T[];
  }
}

addPrototype(Array, ["limit", "take"], limit);
