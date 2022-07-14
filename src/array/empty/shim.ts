import { addPrototype } from "../../utils.js";
import empty from "./index.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {

    /**
     * Empty the array
     * @example
     * const arr = [1,3];
     * arr.empty();
     * // arr = []
     */
    empty(): void;
  }
}

addPrototype(Array, "empty", empty);
