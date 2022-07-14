import { PathT, addPrototype } from "../../utils.js";
import implode from "./index.js";

declare global {
  interface Array<T> {

    /**
     * It's like join but u get to tell it which keys to join
     * @param path
     * @param [separator=", "]
     * @example
     * [{a: {b: 'first'}}, {a: {b: 'second'}}, {a: {b: 'third'}}].implode('a.b', ', ');
     * // 'first, second, third'
     */
    implode(
      path: T extends Record<string, unknown> ? PathT<T> : string,
      separator?: string,
    ): string;
  }
}

addPrototype(Array, "implode", implode);
