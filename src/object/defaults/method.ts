const method = (
  obj: Record<string, unknown>,
  ...sources: Record<string, unknown>[]
): Record<string, unknown> =>
  Object.assign(sources.pop()!, ...sources.reverse(), obj);

export = method;
