import isObject from "./index.js";

declare global {
  interface ObjectConstructor {

    /**
     * Returns true if the given argument is an object
     * @param arg
     * @example
     * Object.isObject(2); // false
     * @example
     * Object.isObject({foo: 'bar'}); // true
     */
    isObject(arg: unknown): arg is Record<string, unknown>;
  }
}

Object.isObject = isObject;
