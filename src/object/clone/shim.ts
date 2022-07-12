import { addPrototype } from "../../utils.js";
import clone from "./index.js";

declare global {
  interface Object {
    /**
     * Creates a (deep) clone of the object
     * @param [deep=false]
     * @example
     * const a = { foo: 'bar', obj: { a: 1, b: 2 } };
     * const b = a.$clone(true); // a !== b, a.obj !== b.obj
     */
    $clone(deep?: boolean): Record<string, unknown>;
  }
}

addPrototype(Object, "$clone", clone);
