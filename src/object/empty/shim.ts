import { addPrototype } from "../../utils.js";
import empty from "./index.js";

declare global {
  interface Object {
    /**
     * Empty the object
     * @example
     * const obj = { a: 1 };
     * obj.$empty();
     * // obj = {};
     */
    $empty(): void;
  }
}

addPrototype(Object, "$empty", empty);
