import isObject from "../isObject/method";

const method = (arg: any): arg is Record<string, unknown> => {
  if (!isObject(arg)) return false;

  if (typeof arg === "function") return false;

  return true;
};

export = method;
