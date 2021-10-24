import { deepClone } from "../../utils.js";

export default function clone<Value>(array: Value[], deep = false): Value[] {
  return deep ? deepClone(array) : [...array];
}
