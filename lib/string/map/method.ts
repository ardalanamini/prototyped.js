const map = (
  str: string,
  fn: (char: string, index: number, chars: string[]) => string,
): string => str.split("").map(fn).join("");

export = map;
