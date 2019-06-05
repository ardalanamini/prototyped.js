import { deepClone } from "../../utils";

const method = <T = any>(arr: T[], deep = false): T[] =>
  deep ? deepClone(arr) : [...arr];

export = method;
