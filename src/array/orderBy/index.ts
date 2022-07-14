import { PathT, pathToKeys } from "../../utils.js";
import contains from "../contains/index.js";

const enum ORDER {
  ASC = "asc",
  DESC = "desc",
}

/**
 * Sorts the array
 * @param arr
 * @param [order="asc"]
 * @example
 * orderBy([2, 1, 2, 5]); // [1,2,2,5]
 * @example
 * orderBy([2, 1, 2, 5], "desc"); // [5,2,2,1]
 */
function orderBy<Value>(arr: Value[], order?: OrderT): Value[];

/**
 * Sorts the array
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
    // eslint-disable-next-line no-undefined
    field = undefined;
  }

  const iterator: (a: any, b: any) => number
    = order === ORDER.ASC
      ? (a, b): number => (a > b ? 1 : a < b ? -1 : 0)
      : (a, b): number => (a < b ? 1 : a > b ? -1 : 0);

  if (field) {
    const keys = pathToKeys(field);
    const reducer = (item: any): number | string => keys.reduce((prev, cur) => prev[cur], item);

    return arr.sort((a, b) => iterator(reducer(a), reducer(b)));
  }

  return arr.sort(iterator);
}

export default orderBy;

export { ORDER };

export type OrderT = "asc" | "desc";
