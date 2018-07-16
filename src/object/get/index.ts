import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $get(key: string): any;
  }
}

/**
 * Retrieve the property indicated by the given selector from the object
 * @memberof Object.prototype
 * @param {string} key
 * @returns {*}
 * @example
 * { selector: { to: { val: 'val to select' } } }.$get('selector.to.val'); // 'val to select'
 */
function $get(this: object, key: string): any {
  return method(this, key);
}

addPrototype("$get", $get);
