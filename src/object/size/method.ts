const method = (obj: object): number => (obj as any).size || (obj as any).length ||
  Object.keys(obj).length;

export = method;
