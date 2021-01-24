export default function isFunction(
  arg: unknown,
): arg is (...args: unknown[]) => unknown {
  return typeof arg === "function";
}
