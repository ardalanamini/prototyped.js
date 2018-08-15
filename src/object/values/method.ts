import * as reduce from "../reduce/method";

const method = (obj: object): any[] => reduce(obj, (prev, value) => {
  prev.push(value);

  return prev;
}, []);

export = method;
