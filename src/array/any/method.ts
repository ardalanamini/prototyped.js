const method = (arr: any[], fn: (value: any, index: number, array: any[]) => boolean = Boolean) => arr.some(fn);

export = method;
