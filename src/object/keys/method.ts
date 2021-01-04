const method = <T extends Record<string, unknown>>(obj: T): Array<keyof T> =>
  Object.keys(obj) as any;

export = method;
