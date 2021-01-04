const method = (
  obj: Record<string, unknown>,
  ...sources: Record<string, unknown>[]
): Record<string, unknown> => Object.assign(obj, ...sources);

export = method;
