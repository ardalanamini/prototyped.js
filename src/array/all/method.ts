const all = (arr: any[], fn: (value: any, index: number, array: any[]) => boolean = Boolean) => arr.every(fn);

export = all;
