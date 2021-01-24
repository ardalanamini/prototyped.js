import isObjectLike from "../isObjectLike";

export default function isPlainObject(
  arg: unknown,
): arg is Record<string, unknown> {
  if (!isObjectLike(arg)) return false;

  let proto = arg;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(arg) === proto;
}
