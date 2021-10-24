import { deepClone } from "../../utils.js";

export default function clone<Value extends Record<string, unknown>>(
  obj: Value,
  deep = false,
): Value {
  return deep ? deepClone(obj) : Object.assign({}, obj);
}
