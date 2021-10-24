export default function once<
  Args extends unknown[],
  Return,
  F extends (...args: Args) => Return,
>(func: F, ...args: Args): Return | void {
  if (func.called) return;

  func.called = true;

  return func.call(func, ...args);
}
