import { deepClone } from "../../utils";

export default function clone<Value>(array: Value[], deep = false): Value[] {
  return deep ? deepClone(array) : [...array];
}
