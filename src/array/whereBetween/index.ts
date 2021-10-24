import { filter } from "../../utils.js";

export default whereBetween;

function whereBetween<T>(arr: T[], start: T, end: T): T[];
function whereBetween<T>(
  arr: T[],
  field: string,
  start: unknown,
  end: unknown,
): T[];
function whereBetween<T>(
  arr: T[],
  field: string | any,
  start: any,
  end?: any,
): T[] {
  if (end === undefined) {
    end = start;
    start = field;
    field = undefined;
  }

  const iterator = (item: any) => item >= start && item <= end;

  return filter(arr, field, iterator);
}
