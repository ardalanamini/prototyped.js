const method = (arr: any[], key?: string): number => {
  const items = [...arr].sort((a, b) => a - b);
  const half = Math.floor(items.length / 2);

  let reducer = (item: any) => item;

  if (key) {
    const keys = key.split(".");

    reducer = (item: any) => keys.reduce((prev, curr) => (prev && prev[curr]) || prev, item);
  }

  if (items.length % 2) return reducer(items[half]);

  return (reducer(items[half - 1]) + reducer(items[half])) / 2;
};

export = method;
