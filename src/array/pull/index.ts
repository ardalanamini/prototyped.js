import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    pull(...args: T[]): void;
  }
}

/**
 * Mutates the original array to filter out the values specified
 * @memberof Array
 * @param {Array} args
 * @example
 * let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
 * myArray.pull('a', 'c'); // myArray = [ 'b', 'b' ];
 */
Array.prototype.pull = utils.methodToPrototype(method);
