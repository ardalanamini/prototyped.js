// tslint:disable-next-line:ban-types
const method = (func: Function, ...args: any[]): any => {
  if (func.called) return;

  func.called = true;

  return func.call(func, ...args);
};

export = method;
