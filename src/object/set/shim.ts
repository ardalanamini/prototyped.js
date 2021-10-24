import set from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Object {
    $set(path: string, value: unknown): void;
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
addPrototype(Object, "$set", set);
