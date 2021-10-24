import isString from "../../string/isString/index.js";
import { filter } from "../../utils.js";

export default whereLike;

function whereLike<T>(arr: T[], value: string | RegExp): T[];
function whereLike<T>(arr: T[], field: string, value: string | RegExp): T[];
function whereLike<T>(
  arr: T[],
  field: string | RegExp,
  value?: string | RegExp,
): T[] {
  if (value === undefined) {
    value = field as string | RegExp;
    field = undefined as any;
  }

  if (isString(value)) value = new RegExp(value, "i");

  const iterator = (item: any) => (value as RegExp).test(item);

  return filter(arr, field as string, iterator);
}
