/**
 * Returns true if the given argument is an instance of Date
 * @param arg
 * @example
 * isDate('foo bar'); // false
 * @example
 * isDate(new Date()); // true
 */
export default function isDate(arg: unknown): arg is Date {
  return (
    arg instanceof Date
    || Object.prototype.toString.call(arg) === "[object Date]"
  );
}
