export default function isBoolean(arg: unknown): arg is boolean {
  return typeof arg === "boolean";
}
