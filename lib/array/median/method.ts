const method = (arr: any[], key?: string): number => {
  arr.sort((a, b) => a - b);

  const half = Math.floor(arr.length / 2);

  if (key) {
    const keys = key.split(".");

    if (arr.length % 2) {
      let value = arr[half];

      keys.map((k) => value = (value && value[k]) || value);

      return value;
    }

    let value1 = arr[half - 1];
    let value2 = arr[half];

    keys.map((k) => value1 = (value1 && value1[k]) || value1);
    keys.map((k) => value2 = (value2 && value2[k]) || value2);

    return (value1 + value2) / 2;
  }

  if (arr.length % 2) return arr[half];

  return (arr[half - 1] + arr[half]) / 2;
};

export = method;
