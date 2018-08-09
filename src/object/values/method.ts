const method = (obj: object): string[] =>
  Object.keys(obj).map((key) => (obj as { [key: string]: any })[key]);

export = method;
