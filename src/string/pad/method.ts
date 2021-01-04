import repeat from "../repeat/method";

const method = (str: string, size: number, value = " "): string => {
  const s = Math.abs(size);

  if (s <= str.length) return str;

  const padStr = repeat(s - str.length, value);

  if (size < 0) return `${padStr}${str}`;

  return `${str}${padStr}`;
};

export = method;
