import * as range from "../range/method";
import * as objectEquals from "../../object/equals/method";

const method = <T = any>(arr: T[], value: any): boolean => {
  if (!Array.isArray(value)) return false;

  if (arr.length !== value.length) return false;

  return range(arr.length - 1).every((key) => objectEquals(arr[key], value[key]));
};

export = method;
