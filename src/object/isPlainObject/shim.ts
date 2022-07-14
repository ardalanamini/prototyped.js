import isPlainObject from "./index.js";

declare global {
  interface ObjectConstructor {

    /**
     * Returns true if the given argument is a plain object
     * @param arg
     * @example
     * Object.isPlainObject(2); // false
     * @example
     * Object.isPlainObject({foo: 'bar'}); // true
     */
    isPlainObject(arg: unknown): arg is Record<string, unknown>;
  }
}

Object.isPlainObject = isPlainObject;
