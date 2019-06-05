import isObjectLike from "../isObjectLike/method";

const method = (arg: any): arg is object => {
  if (!isObjectLike(arg)) return false;

  let proto = arg;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(arg) === proto;
};

export = method;
