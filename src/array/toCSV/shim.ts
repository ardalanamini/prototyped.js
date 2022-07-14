import { addPrototype } from "../../utils.js";
import toCSV from "./index.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {

    /**
     * Converts a 2D array to a comma-separated values (CSV) string
     * @param [delimiter=","]
     * @example
     * [['a', 'b'], ['c', 'd']].toCSV(); // '"a","b"\n"c","d"'
     * @example
     * [['a', 'b'], ['c', 'd']].toCSV(';'); // '"a";"b"\n"c";"d"'
     */
    toCSV(delimiter?: string): string;
  }
}

addPrototype(Array, "toCSV", toCSV);
