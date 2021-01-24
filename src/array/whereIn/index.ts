import { filter } from "../../utils";

export default whereIn;

function whereIn<T>(arr: T[], value: T[]): T[];
function whereIn<T>(arr: T[], field: string, value: unknown[]): T[];
function whereIn<T>(arr: T[], field: string | any[], value?: any[]): T[] {
  if (value === undefined) {
    value = field as any[];
    field = undefined as any;
  }

  const iterator = (item: T) => value!.indexOf(item) !== -1;

  return filter(arr, field as string, iterator);
}
