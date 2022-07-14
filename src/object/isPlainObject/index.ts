import isObjectLike from "../isObjectLike/index.js";

/**
 * Returns true if the given argument is a plain object
 * @param arg
 * @example
 * isPlainObject(2); // false
 * @example
 * isPlainObject({foo: 'bar'}); // true
 */
export default function isPlainObject(arg: unknown): arg is Record<string, unknown> {
  if (!isObjectLike(arg)) return false;

  let proto = arg;

  while (Object.getPrototypeOf(proto) !== null) proto = Object.getPrototypeOf(proto);


  return Object.getPrototypeOf(arg) === proto;
}
