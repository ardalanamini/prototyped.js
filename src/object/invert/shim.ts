import { addPrototype } from "../../utils.js";
import invert from "./index.js";

declare global {
  interface Object {
    /**
     * Inverts the key-value pairs of the object, without mutating it
     * @example
     * ({ name: "John", age: 20 }).$invert(); // { 20: "age", John: "name" }
     */
    $invert(): Record<string, unknown>;
  }
}

addPrototype(Object, "$invert", invert);
