const method = (obj: Record<string, unknown>): number =>
  (obj as any).size || (obj as any).length || Object.keys(obj).length;

export = method;
