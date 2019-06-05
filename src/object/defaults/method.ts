const method = (obj: object, ...sources: object[]): object =>
  Object.assign(sources.pop()!, ...sources.reverse(), obj);

export = method;
