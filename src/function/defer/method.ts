// eslint-disable-next-line @typescript-eslint/ban-types
const method = (func: Function, ...args: any[]): any =>
  setTimeout(func, 1, ...args);

export = method;
