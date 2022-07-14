import { addPrototype } from "../../utils.js";
import values from "./index.js";

declare global {
  interface Object {

    /**
     * Get values of the object
     * @example
     * ({ one: 1, two: 2, three: 3 }).$values(); // [1, 2, 3]
     */
    $values(): unknown[];
  }
}

addPrototype(Object, "$values", values);
