const method = (arr: any[], key: string): any[] => {
  const keys = key.split(".");

  return arr.map((item) => {
    keys.map((k) => item = (item && item[k]) || undefined);

    return item;
  });
};

export = method;
