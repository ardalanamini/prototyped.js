import { addPrototype } from "../../utils.js";
import chars from "./index.js";

declare global {
  interface String {

    /**
     * Returns an array of the string's character
     * @example
     * "Hello".chars(); // ["H", "e", "l", "l", "o"]
     */
    chars(): string[];
  }
}

addPrototype(String, "chars", chars);
