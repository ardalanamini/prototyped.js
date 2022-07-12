import { addPrototype } from "../../utils.js";
import parseInt from "./index.js";

declare global {
  interface String {
    /**
     * Converts string to an integer of the specified radix
     * @param [radix]
     * @example
     * "08".parseInt(); // 8
     */
    parseInt(radix?: number): number;
  }
}

addPrototype(String, "parseInt", parseInt);
