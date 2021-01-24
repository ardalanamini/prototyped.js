export default function isNumber(arg: unknown): arg is number {
  return typeof arg === "number" || arg instanceof Number;
}
