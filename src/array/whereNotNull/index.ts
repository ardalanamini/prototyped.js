import { filter } from "../../utils";

export default function whereNotNull<T>(arr: T[], field?: string): T[] {
  const iterator = (item: any) => item !== null && item !== undefined;

  return filter(arr, field, iterator);
}
