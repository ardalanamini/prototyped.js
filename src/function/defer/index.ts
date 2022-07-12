/**
 * Defers invoking the function until the current call stack has cleared
 * @param func
 * @param args
 * @example
 * const test = (msg) => console.log(msg);
 * defer(test, 'a'), test('b'); // logs 'b' then 'a'
 */
export default function defer<
  Args extends unknown[],
  F extends (...args: Args) => unknown,
>(func: F, ...args: Args): NodeJS.Timeout {
  return setTimeout(func, 1, ...args);
}
