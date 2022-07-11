import { addPrototype } from "../../utils.js";
import inRange from "./index.js";

declare global {
  interface Number {
    /**
     * Checks if n is between start and up to end
     * @param end
     * @param [start=0]
     * @example
     * (4).inRange(8); // true
     */
    inRange(end: number, start?: number): boolean;
  }
}

addPrototype(Number, "inRange", inRange);
