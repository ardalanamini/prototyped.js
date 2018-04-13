const method = (obj: { [key: string]: any }): object => {
  return Object.keys(obj).reduce((acc: { [key: string]: any }, key) => {
    acc[obj[key]] = key;

    return acc;
  }, {});
};

export = method;
