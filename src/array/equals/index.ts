import objectEquals from "../../object/equals/index.js";
import range from "../range/index.js";

export default function equals<T>(arr: T[], value: unknown): value is T[] {
  if (!Array.isArray(value)) return false;

  if (arr.length !== value.length) return false;

  return range(arr.length - 1).every((key) =>
    objectEquals(arr[key] as Record<string, unknown>, value[key]),
  );
}
