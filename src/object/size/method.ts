const method = (obj: object): number => (obj as { [key: string]: any }).size ||
  (obj as { [key: string]: any }).length ||
  Object.keys(obj).length;

export = method;
