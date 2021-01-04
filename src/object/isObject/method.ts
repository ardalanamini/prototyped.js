const method = (arg: any): arg is Record<string, unknown> =>
  arg instanceof Object;

export = method;
