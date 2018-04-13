const method = (arr: any[], key?: string): number => {
  let min: number = +Infinity;

  if (key) {
    const keys = key.split(".");

    arr.map((item) => {
      keys.map((k) => item = item && item[k] || 0);

      min = Math.min(item, min);
    });

    return min;
  }

  arr.map((num) => min = Math.min(num, min));

  return min;
};

export = method;
