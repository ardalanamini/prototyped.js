import { addPrototype } from "../../utils.js";
import chunk from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Chunks the array into smaller arrays of a specified size
     * @param size
     * @example
     * [1, 2, 3, 4, 5].chunk(2); // [[1,2],[3,4],[5]]
     */
    chunk(size: number): T[][];
  }
}

addPrototype(Array, "chunk", chunk);
