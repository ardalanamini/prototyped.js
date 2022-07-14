import { addPrototype } from "../../utils.js";
import omit from "./index.js";

declare global {
  interface Object {

    /**
     * Omits the key-value pairs corresponding to the given keys from an object; or
     * Creates an object composed of the properties the given function returns falsey for.
     * The function is invoked with two arguments: (value, key)
     * @param arr
     * @example
     * { a: 1, b: '2', c: 3 }.$omit(['b']); // { a: 1, c: 3 }
     * @example
     * { a: 1, b: '2', c: 3 }.$omit((x) => typeof x === 'number'); // { b: '2' }
     */
    $omit(
      arr: string[] | ((value: unknown, key: string) => unknown),
    ): Record<string, unknown>;
  }
}

addPrototype(Object, "$omit", omit);
