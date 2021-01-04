const method = (obj: { [key: string]: any }): Record<string, unknown> => {
  return Object.keys(obj).reduce((acc: { [key: string]: any }, key) => {
    acc[obj[key]] = key;

    return acc;
  }, {});
};

export = method;
