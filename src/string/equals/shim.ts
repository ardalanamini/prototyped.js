import { addPrototype } from "../../utils.js";
import equals from "./index.js";

declare global {
  interface String {
    /**
     * Checks if the string is equal to the given value
     * @param value
     * @example
     * "hello".equals("Hello"); // false
     */
    equals(value: unknown): boolean;
  }
}

addPrototype(String, "equals", equals);
