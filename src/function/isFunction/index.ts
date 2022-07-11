/**
 * Returns true if the given argument is a function
 * @param arg
 * @example
 * isFunction(2); // false
 * @example
 * isFunction(() => {}); // true
 */
export default function isFunction(
  arg: unknown,
): arg is (...args: unknown[]) => unknown {
  return typeof arg === "function";
}
