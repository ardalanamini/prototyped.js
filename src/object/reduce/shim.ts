import { addPrototype } from "../../utils.js";
import reduce from "./index.js";

declare global {
  interface Object {

    /**
     * Just like array.reduce
     * @param fn
     * @param [initialValue=undefined]
     * @example
     * ({foo: 1, bar: 2}).$reduce((prev, value, key) => [...prev, key + ":" + value], []); // ["foo:1", "bar:2"]
     */
    $reduce<T = any>(
      fn: (
        prev: T,
        value: unknown,
        key: string,
        object: Record<string, unknown>,
      ) => T,
      initialValue?: T,
    ): T;
  }
}

addPrototype(Object, "$reduce", reduce);
