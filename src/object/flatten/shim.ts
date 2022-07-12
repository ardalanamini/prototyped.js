import { addPrototype } from "../../utils.js";
import flatten from "./index.js";

declare global {
  interface Object {
    /**
     * Flattens the object into a single-depth object
     * @example
     * ({ foo: 1, bar: { foo: 2 } }).$flatten(); // { foo: 1, "bar.foo": 2 }
     */
    $flatten(): Record<string, unknown>;
  }
}

addPrototype(Object, "$flatten", flatten);
