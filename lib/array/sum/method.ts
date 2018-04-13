const method = (arr: any[], key?: string): number => {
  if (key) {
    const keys = key.split(".");
    let sum = 0;

    arr.map((item) => {
      keys.map((k) => item = (item && item[k]) || 0);

      sum += item;
    });

    return sum;
  }

  return arr.reduce((acc, val) => acc + val, 0);
};

export = method;
