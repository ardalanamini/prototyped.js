const method = (
  str: string,
  fn: (char: string, index: number, chars: string[]) => void,
) => str.split("").forEach(fn);

export = method;
