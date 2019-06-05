const method = (str: string, pattern = /[^a-zA-Z-]+/): string[] =>
  str.split(pattern).filter(Boolean);

export = method;
