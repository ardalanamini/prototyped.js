import { addPrototype } from "../../utils.js";
import words from "./index.js";

declare global {
  interface String {
    /**
     * Converts a given string into an array of words
     * @param [pattern=/[^a-zA-Z-]+/]
     * @example
     * 'I love javaScript!!'.words(); // ["I", "love", "javaScript"]
     * @example
     * 'python, javaScript & coffee'.words(); // ["python", "javaScript", "coffee"]
     */
    words(pattern?: RegExp): string[];
  }
}

addPrototype(String, "words", words);
