import { addPrototype } from "../../utils.js";
import pad from "./index.js";

declare global {
  interface String {

    /**
     * FillS the string with the given value until the string reaches the specified size
     * @param size
     * @param [value=" "]
     * @example
     * "123".pad(5, 0); // "12300"
     * @example
     * "123".pad(-5, 0); // "00123"
     */
    pad(size: number, value?: string): string;
  }
}

addPrototype(String, "pad", pad);
