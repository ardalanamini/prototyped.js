import { PathT } from "../../utils.js";
import sum from "../sum/index.js";

export default average;

function average<
  Value extends Record<string, unknown>,
  Path extends PathT<Value> = never,
>(array: Value[], path?: Path): number;
function average<Value>(array: Value[]): number;
function average<Value>(array: Value[], path?: string): number {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return sum(array as any[], path) / array.length;
}
