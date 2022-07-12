import { addPrototype } from "../../utils.js";
import isEmpty from "./index.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    /**
     * Checks if the array is empty
     * @example
     * [1,2].isEmpty(); // false
     * @example
     * [].isEmpty(); // true
     */
    isEmpty(): boolean;
  }
}

addPrototype(Array, "isEmpty", isEmpty);
