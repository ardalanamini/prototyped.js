import { filter } from "../../utils";

export default whereNotBetween;

function whereNotBetween<T>(arr: T[], start: T, end: T): T[];
function whereNotBetween<T>(
  arr: T[],
  field: string,
  start: unknown,
  end: unknown,
): T[];
function whereNotBetween<T>(
  arr: T[],
  field: string | any,
  start: any,
  end?: any,
): T[] {
  if (end === undefined) {
    end = start as any;
    start = field as any;
    field = undefined as any;
  }

  const iterator = (item: any) => item < start || item > end;

  return filter(arr, field, iterator);
}
