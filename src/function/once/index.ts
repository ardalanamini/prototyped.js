/**
 * Ensures a function is called only once
 * @param func
 * @param args
 * @example
 * const test = (msg) => console.log(msg);
 * once(test, 'a'); // logs 'a'
 * once(test, 'b'); // no log this time
 */
export default function once<
  Args extends unknown[],
  Return,
  F extends (...args: Args) => Return,
>(func: F, ...args: Args): Return | void {
  if (func.called) return;

  func.called = true;

  return func.call(func, ...args);
}
