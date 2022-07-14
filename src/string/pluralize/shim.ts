import { addPrototype } from "../../utils.js";
import pluralize from "./index.js";

declare global {
  interface String {

    /**
     * Returns the singular or plural form of the word based on the input number
     * @param [count]
     * @example
     * 'apple'.pluralize(); // 'apples'
     * @example
     * 'apple'.pluralize(0); // 'apples'
     * @example
     * 'apple'.pluralize(1); // 'apple'
     * @example
     * 'apple'.pluralize(2); // 'apples'
     * @example
     * 'person'.pluralize(2); // 'people'
     * @example
     * 'people'.pluralize(1); // 'person'
     */
    pluralize(count?: number): string;
  }
}

addPrototype(String, "pluralize", pluralize);
