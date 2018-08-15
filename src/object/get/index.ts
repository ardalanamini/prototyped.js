import * as method from "./method";

declare global {
  interface Object {
    $get(key: string): any;
  }
}

/**
 * Retrieve the property indicated by the given selector from the object
 * @memberof Object
 * @param {String} key
 * @returns {*}
 * @example
 * { selector: { to: { val: 'val to select' } } }.$get('selector.to.val'); // 'val to select'
 */
Object.prototype.$get = function(key) {
  return method(this, key);
};
