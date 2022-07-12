import { addPrototype } from "../../utils.js";
import equals from "./index.js";

declare global {
  interface Number {
    /**
     * Checks if the number is equal to the given value
     * @param value
     * @example
     * (22).equals("22"); // false
     */
    equals(value: unknown): boolean;
  }
}

addPrototype(Number, "equals", equals);
