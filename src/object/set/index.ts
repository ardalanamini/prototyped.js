import * as method from "./method";

declare global {
  interface Object {
    $set(path: string, value: any): any;
  }
}

/**
 * Puts the property value indicated by the given selector into the object
 * @memberof Object
 * @param {String} path
 * @param {*} value
 * @example
 * const obj = { selector: { to: { val: 'val to select' } } };
 * obj.$set('selector.to.val');
 * // obj -> { selector: { to: { val: 'val to select' } } }
 */
Object.prototype.$set = function(path, value) {
  return method(this, path, value);
};
