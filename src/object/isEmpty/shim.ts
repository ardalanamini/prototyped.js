import { addPrototype } from "../../utils.js";
import isEmpty from "./index.js";

declare global {
  interface Object {

    /**
     * Checks if the object is empty
     * @example
     * ({ a: 1 }).$isEmpty(); // false
     * @example
     * ({}).$isEmpty(); // true
     */
    $isEmpty(): boolean;
  }
}

addPrototype(Object, "$isEmpty", isEmpty);
