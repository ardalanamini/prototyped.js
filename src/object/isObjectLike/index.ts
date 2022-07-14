import isObject from "../isObject/index.js";

/**
 * Returns true if the given argument is object like
 * @param arg
 * @example
 * isObjectLike(2); // false
 * @example
 * isObjectLike({foo: 'bar'}); // true
 */
export default function isObjectLike(arg: unknown): arg is Record<string, unknown> {
  if (!isObject(arg)) return false;

  return typeof arg !== "function";
}
