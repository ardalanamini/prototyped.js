const method = (obj: object, fn: (value: any, key: string, object: object) => void) => {
  const keys = Object.keys(obj);
  const length = keys.length;

  for (let i = 0; i < length; i++) {
    const key = keys[i];

    fn((obj as { [key: string]: any })[key], key, obj);
  }
};

export = method;
