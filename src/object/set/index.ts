import { addPrototype } from "../../utils";
import * as method from "./method";

declare global {
  interface Object {
    $set(path: string, value: any): any;
  }
}

/**
 * Puts the property value indicated by the given selector into the object
 * @memberof Object.prototype
 * @function $set
 * @param {String} path
 * @param {*} value
 * @example
 * const obj = { selector: { to: { val: 'val to select' } } };
 * obj.$set('selector.to.val');
 * // obj -> { selector: { to: { val: 'val to select' } } }
 */
addPrototype(Object, "$set", function(this: object, path: string, value: any) {
  return method(this, path, value);
});
