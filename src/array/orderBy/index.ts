import { PathT, pathToKeys } from "../../utils";
import contains from "../contains";

export default orderBy;

function orderBy<Value>(arr: Value[], order?: OrderT): Value[];
function orderBy<
  Value extends Record<string, unknown>,
  Path extends PathT<Value> = never
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
