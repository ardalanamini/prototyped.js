import isObjectLike from "./index.js";

declare global {
  interface ObjectConstructor {
    /**
     * Returns true if the given argument is object like
     * @param arg
     * @example
     * Object.isObjectLike(2); // false
     * @example
     * Object.isObjectLike({foo: 'bar'}); // true
     */
    isObjectLike(arg: unknown): arg is Record<string, unknown>;
  }
}

Object.isObjectLike = isObjectLike;
