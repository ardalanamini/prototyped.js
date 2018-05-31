import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $set(path: string, value: any): any;
  }
}

/**
 * Puts the property value indicated by the given selector into the object
 * @memberof Object.prototype
 * @param {string} path
 * @param {*} value
 * @example
 * const obj = { selector: { to: { val: 'val to select' } } };
 * obj.$set('selector.to.val');
 * // obj -> { selector: { to: { val: 'val to select' } } }
 */
function $set(this: object, path: string, value: any): any {
  return method(this, path, value);
}

addPrototype("$set", $set);
