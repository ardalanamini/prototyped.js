import { addPrototype } from "../../utils.js";
import mapValues from "./index.js";

declare global {
  interface Object {

    /**
     * Creates an object with the same keys as the provided object and values
     * generated by running the provided function for each value
     * @param fn
     * @example
     * const users = {
     *   fred: { user: "fred", age: 40 },
     *   pebbles: { user: "pebbles", age: 1 }
     * };
     * users.$mapValues(u => u.age); // { fred: 40, pebbles: 1 }
     */
    $mapValues(
      fn: (
        value: unknown,
        key: string,
        object: Record<string, unknown>,
      ) => unknown,
    ): Record<string, unknown>;
  }
}

addPrototype(Object, "$mapValues", mapValues);
