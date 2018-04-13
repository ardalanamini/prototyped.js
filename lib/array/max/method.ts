const method = (arr: any[], key?: string): number => {
  let max: number = -Infinity;

  if (key) {
    const keys = key.split(".");

    arr.map((item) => {
      keys.map((k) => item = (item && item[k]) || 0);

      max = Math.max(item, max);
    });

    return max;
  }

  arr.map((num) => max = Math.max(num, max));

  return max;
};

export = method;
