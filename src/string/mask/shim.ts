import { addPrototype } from "../../utils.js";
import mask from "./index.js";

declare global {
  interface String {
    /**
     * Replaces all but the last num of characters with the specified mask character
     * @param [num=4]
     * @param [mask='*']
     * @example
     * '1234567890'.mask(); // '******7890'
     * @example
     * '1234567890'.mask(3); // '*******890'
     * @example
     * '1234567890'.mask(-4, '$'); // '$$$$567890'
     */
    mask(num?: number, mask?: string): string;
  }
}

addPrototype(String, "mask", mask);
