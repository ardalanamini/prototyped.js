import { addPrototype } from "../../utils.js";
import assign from "./index.js";

declare global {
  interface Object {

    /**
     * Assigns object like Object.assign
     * @param sources
     * @example
     * ({ a: 0 }).$assign({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }
     */
    $assign(...sources: Array<Record<string, unknown>>): Record<string, unknown>;
  }
}

addPrototype(Object, "$assign", assign);
