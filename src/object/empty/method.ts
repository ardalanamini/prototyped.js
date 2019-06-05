const method = (obj: object) => {
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    delete (obj as any)[keys[i]];
  }
};

export = method;
