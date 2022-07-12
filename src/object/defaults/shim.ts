import { addPrototype } from "../../utils.js";
import defaults from "./index.js";

declare global {
  interface Object {
    /**
     * Assigns object in reverse by Object.assign
     * @param sources
     * @example
     * ({ a: 0 }).$defaults({ a: 1, b: 2 }, { b: 3 }); // { a: 0, b: 2 }
     */
    $defaults(...sources: Record<string, unknown>[]): Record<string, unknown>;
  }
}

addPrototype(Object, "$defaults", defaults);
