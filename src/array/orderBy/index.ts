import { PathT, pathToKeys } from "../../utils.js";
import contains from "../contains/index.js";

export default orderBy;

/**
 * sorts the array
 * @param arr
 * @param [order="asc"]
 * @example
 * orderBy([2, 1, 2, 5]); // [1,2,2,5]
 * @example
 * orderBy([2, 1, 2, 5], "desc"); // [5,2,2,1]
 */
function orderBy<Value>(arr: Value[], order?: OrderT): Value[];
/**
 * sorts the array
 * @param array
 * @param field
 * @param [order="asc"]
 * @example
 * orderBy([{count:1}, {count:20}, {count:15}], "count", "asc"); // [{count:1},{count:15},{count:20}]
 */
function orderBy<
  Value extends Record<string, unknown>,
  Path extends PathT<Value> = never,
>(array: Value[], field: Path, order?: OrderT): Value[];
function orderBy<Value>(
  arr: Value[],
  field?: string,
  order: OrderT = ORDER.ASC,
): Value[] {
  if (field && contains([ORDER.ASC, ORDER.DESC], field)) {
    order = field as OrderT;
    field = undefined;
  }

  const iterator: (a: any, b: any) => number =
    order === ORDER.ASC
      ? (a, b) => (a > b ? 1 : a < b ? -1 : 0)
      : (a, b) => (a < b ? 1 : a > b ? -1 : 0);

  if (field) {
    const keys = pathToKeys(field);
    const reducer = (item: any) => keys.reduce((prev, cur) => prev[cur], item);

    return arr.sort((a, b) => iterator(reducer(a), reducer(b)));
  }

  return arr.sort(iterator);
}

export const enum ORDER {
  ASC = "asc",
  DESC = "desc",
}

export type OrderT = "asc" | "desc";
