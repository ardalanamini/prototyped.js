import { pathToKeys } from "../../utils";
import contains from "../contains/method";

const method = <T = any>(
  arr: T[],
  field?: string,
  order: "asc" | "desc" = "asc",
) => {
  if (field && contains(["asc", "desc"], field)) {
    order = field as ("asc" | "desc");
    field = undefined;
  }

  const iterator: (a: any, b: any) => number =
    order === "asc"
      ? (a, b) => (a > b ? 1 : a < b ? -1 : 0)
      : (a, b) => (a < b ? 1 : a > b ? -1 : 0);

  if (field) {
    const keys = pathToKeys(field as string);
    const reducer = (item: any) => keys.reduce((prev, cur) => prev[cur], item);

    return arr.sort((a, b) => iterator(reducer(a), reducer(b)));
  }

  return arr.sort(iterator);
};

export = method;
