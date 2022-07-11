import { addPrototype } from "../../utils.js";
import equals from "./index.js";

declare global {
  interface Date {
    /**
     * Checks if the date is equal to the given value
     * @param value
     * @example
     * (new Date()).equals(new Date()); // false
     */
    equals(value: unknown): boolean;
  }
}

addPrototype(Date, "equals", equals);
