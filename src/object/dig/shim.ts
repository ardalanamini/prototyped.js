import dig from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Object {
    $dig(target: string): unknown;
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
addPrototype(Object, "$dig", dig);
