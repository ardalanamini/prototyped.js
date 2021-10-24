import { filter } from "../../utils.js";

export default whereNotIn;

function whereNotIn<T>(arr: T[], value: T[]): T[];
function whereNotIn<T>(arr: T[], field: string, value: unknown[]): T[];
function whereNotIn<T>(arr: T[], field: string | any[], value?: any[]): T[] {
  if (value === undefined) {
    value = field as any[];
    field = undefined as any;
  }

  const iterator = (item: any) => (value as any[]).indexOf(item) === -1;

  return filter(arr, field as string, iterator);
}
