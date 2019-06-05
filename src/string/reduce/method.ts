const method = (
  str: string,
  fn: (prev: any, char: string, index: number, chars: string[]) => any,
  initialValue: any = undefined,
) => str.split("").reduce(fn, initialValue);

export = method;
