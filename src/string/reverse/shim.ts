import { addPrototype } from "../../utils.js";
import reverse from "./index.js";

declare global {
  interface String {
    /**
     * Reverses the string
     * @example
     * "foobar".reverse(); // "raboof"
     */
    reverse(): string;
  }
}

addPrototype(String, "reverse", reverse);
