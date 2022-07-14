import { addPrototype } from "../../utils.js";
import map from "./index.js";

declare global {
  interface String {

    /**
     * Just like array.map
     * @param fn
     * @example
     * 'Hello'.map((char) => char == 'o' ? 'O' : char); // 'HellO'
     */
    map(fn: (char: string, index: number, chars: string[]) => string): string;
  }
}

addPrototype(String, "map", map);
