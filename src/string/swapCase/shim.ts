import { addPrototype } from "../../utils.js";
import swapCase from "./index.js";

declare global {
  interface String {
    /**
     * Returns a copy of the string in which all the case-based characters have had their case swapped
     * @example
     * 'Hello'.swapCase(); // 'hELLO'
     */
    swapCase(): string;
  }
}

addPrototype(String, "swapCase", swapCase);
