import isObject from "../isObject/index.js";

export default function isObjectLike(
  arg: unknown,
): arg is Record<string, unknown> {
  if (!isObject(arg)) return false;

  return typeof arg !== "function";
}
