import { addPrototype } from "../../utils.js";
import digitize from "./index.js";

declare global {
  interface Number {
    /**
     * Converts the number to an array of digits
     * @example
     * (123).digitize(); // [1, 2, 3]
     */
    digitize(): number[];
  }
}

addPrototype(Number, "digitize", digitize);
