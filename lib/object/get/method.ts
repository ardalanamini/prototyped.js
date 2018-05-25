const method = (obj: { [key: string]: any }, key: string): any =>
  key.split(".").reduce((prev, cur) => prev[cur], obj);

export = method;
