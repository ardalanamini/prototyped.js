const method = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  fn: (value: T[K], key: K, object: T) => void,
) =>
    Object.keys(obj).forEach((key) =>
      fn((obj as { [key: string]: any })[key], key as K, obj),
    );

export = method;
