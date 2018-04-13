const method = (arr: any[], key: string, separator = ", "): string => {
  const keys = key.split(".");

  return arr.map((item) => {
    keys.map((k) => item = item && item[k] || undefined);

    return item;
  }).filter(Boolean).join(separator);
};

export = method;
