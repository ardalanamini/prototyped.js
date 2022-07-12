import { addPrototype } from "../../utils.js";
import reduce from "./index.js";

declare global {
  interface String {
    /**
     * Just like array.reduce
     * @param fn
     * @param initialValue
     * @example
     * '123'.reduce((prev, char) => prev + (+char), 0); // 6
     */
    reduce<T = any>(
      fn: (prev: T, char: string, index: number, chars: string[]) => T,
      initialValue?: T,
    ): T;
  }
}

addPrototype(String, "reduce", reduce);
