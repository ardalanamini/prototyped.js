const method = (arr: any[], key?: string) => {
  if (key) {
    const keys = key.split(".");

    return arr.map((item) => {
      keys.map((k) => item = (item && item[k]) || 0);

      return item;
    }).reduce((acc, val) => acc + val, 0) / arr.length;
  }

  return arr.reduce((acc, val) => acc + val, 0) / arr.length;
};

export = method;
