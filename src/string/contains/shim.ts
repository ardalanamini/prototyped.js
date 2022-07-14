import { addPrototype } from "../../utils.js";
import contains from "./index.js";

declare global {
  interface String {

    /**
     * Find out if the string contains the argument at any position
     * @param str
     * @param [sensitive=false]
     * @example
     * 'javaScript & typescript'.contains('Typescript'); // true
     * @example
     * 'javaScript & typescript'.contains('Typescript', true); // false
     */
    contains(str: string, sensitive?: boolean): boolean;
  }
}

addPrototype(String, "contains", contains);
