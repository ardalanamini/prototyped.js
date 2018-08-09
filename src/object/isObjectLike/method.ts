import * as isObject from "../isObject/method";

const method = (arg: any): arg is object => {
  if (!isObject(arg)) return false;

  if (typeof arg === "function") return false;

  return true;
};

export = method;
