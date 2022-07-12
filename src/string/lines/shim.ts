import { addPrototype } from "../../utils.js";
import lines from "./index.js";

declare global {
  interface String {
    /**
     * Splits a multiline string into an array of lines
     * @example
     * 'This\nis a\nmultiline\nstring.\n'.lines(); // ['This', 'is a', 'multiline', 'string.' , '']
     */
    lines(): string[];
  }
}

addPrototype(String, "lines", lines);
