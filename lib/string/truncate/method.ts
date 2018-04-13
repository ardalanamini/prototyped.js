const method = (str: string, num: number, truncateString = "..."): string => {
  const length = truncateString.length;

  return str.length > num ? str.slice(0, num > length ? num - length : num) + truncateString : str;
};

export = method;
