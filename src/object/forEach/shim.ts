import { addPrototype } from "../../utils.js";
import forEach from "./index.js";

declare global {
  interface Object {
    /**
     * Iterates the object by keys
     * @param fn
     * @example
     * const users = {
     *   fred: { user: "fred", age: 40 },
     *   pebbles: { user: "pebbles", age: 1 }
     * };
     * users.$forEach(u => console.log(u.age)); // console logs 40 and 1
     */
    $forEach(
      fn: (
        value: unknown,
        key: string,
        object: Record<string, unknown>,
      ) => void,
    ): void;
  }
}

addPrototype(Object, "$forEach", forEach);
