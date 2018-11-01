import { addPrototype } from "../../utils";
import * as method from "./method";

declare global {
  interface Object {
    $dig(target: string): any;
  }
}

/**
 * Returns the target value in a nested JSON object, based on the given key
 * @memberof Object.prototype
 * @function $dig
 * @param {String} target
 * @returns {*}
 * @example
 * const data = {
 *  level1: {
 *   level2: {
 *    level3: 'some data'
 *   }
 *  }
 * };
 * dig(data, 'level3'); // 'some data'
 * dig(data, 'level4'); // undefined
 */
addPrototype(Object, "$dig", method);
