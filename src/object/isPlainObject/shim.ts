import isPlainObject from ".";

declare global {
  interface ObjectConstructor {
    isPlainObject(arg: unknown): arg is Record<string, unknown>;
  }
}

/**
 * Returns true if the given argument is a plain object
 * @memberof Object
 * @function isPlainObject
 * @param {*} arg
 * @returns {Boolean}
 * @example
 * Object.isPlainObject(2); // false
 * Object.isPlainObject({foo: 'bar'}); // true
 */
Object.isPlainObject = isPlainObject;
