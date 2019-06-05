const method = (obj: object, ...sources: object[]): object =>
  Object.assign(obj, ...sources);

export = method;
