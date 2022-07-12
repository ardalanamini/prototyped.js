/**
 * Returns true if the given argument is an object
 * @param arg
 * @example
 * isObject(2); // false
 * @example
 * isObject({foo: 'bar'}); // true
 */
export default function isObject(arg: unknown): arg is Record<string, unknown> {
  return arg instanceof Object;
}
