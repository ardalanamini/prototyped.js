const method = (arg: any): arg is Date => arg instanceof Date ||
  Object.prototype.toString.call(arg) === "[object Date]";

export = method;
