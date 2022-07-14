import { addPrototype } from "../../utils.js";
import isEmpty from "./index.js";

declare global {
  interface String {

    /**
     * Checks if the string is empty
     * @example
     * "123".isEmpty(); // false
     * @example
     * "".isEmpty(); // true
     */
    isEmpty(): boolean;
  }
}

addPrototype(String, "isEmpty", isEmpty);
