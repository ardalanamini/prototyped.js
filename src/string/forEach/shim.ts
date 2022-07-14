import { addPrototype } from "../../utils.js";
import forEach from "./index.js";

declare global {
  interface String {

    /**
     * Just like array.forEach
     * @param fn
     * @example
     * 'Hello'.forEach((char, index) => char == 'o' && consol.log(index)); // console logs 4
     */
    forEach(fn: (char: string, index: number, chars: string[]) => void): void;
  }
}

addPrototype(String, "forEach", forEach);
