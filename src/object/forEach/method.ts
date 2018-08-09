const method = (obj: object, fn: (value: any, key: string | number, object: object) => void) =>
  Object.keys(obj).forEach((key) => fn((obj as { [key: string]: any })[key], key, obj));

export = method;
