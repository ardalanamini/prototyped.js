import { deepClone } from "../../utils";

const method = <Value extends Record<string, unknown>>(
  obj: Value,
  deep = false,
): Value => (deep ? deepClone(obj) : Object.assign({}, obj));

export = method;
