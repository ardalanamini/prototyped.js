import { addPrototype } from "../../utils.js";
import keys from "./index.js";

declare global {
  interface Object {
    /**
     * Get keys of the object
     * @example
     * ({ one: 1, two: 2, three: 3 }).$keys(); // ["one", "two", "three"]
     */
    $keys(): string[];
  }
}

addPrototype(Object, "$keys", keys);
