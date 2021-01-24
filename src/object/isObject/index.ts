export default function isObject(arg: unknown): arg is Record<string, unknown> {
  return arg instanceof Object;
}
