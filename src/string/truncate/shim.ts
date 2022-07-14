import { addPrototype } from "../../utils.js";
import truncate from "./index.js";

declare global {
  interface String {

    /**
     * Truncates a string up to a specified length
     * @param num
     * @param [truncateString="..."]
     * @example
     * 'boomerang'.truncate(7); // 'boom...'
     * @example
     * 'boomerang'.truncate(7, '....'); // 'boo....'
     */
    truncate(num: number, truncateString?: string): string;
  }
}

addPrototype(String, "truncate", truncate);
