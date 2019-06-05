const method = (str: string, num = 4, mask = "*"): string =>
  str.slice(0, -num).replace(/./g, mask) + str.slice(-num);

export = method;
