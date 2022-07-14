import { addPrototype } from "../../utils.js";
import equals from "./index.js";

declare global {
  interface Object {

    /**
     * Performs a deep comparison between two values to determine if they are equivalent
     * @param obj
     * @example
     * ({ a: [2, { e: 3 }], b: [4], c: 'foo' }).$equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
     */
    $equals(obj: unknown): boolean;
  }
}

addPrototype(Object, "$equals", equals);
