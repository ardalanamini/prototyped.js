import { addPrototype } from "../../utils.js";
import pull from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Mutates the original array to filter out the values specified
     * @param args
     * @example
     * let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
     * myArray.pull('a', 'c'); // myArray = [ 'b', 'b' ];
     */
    pull(...args: T[]): void;
  }
}

addPrototype(Array, "pull", pull);
