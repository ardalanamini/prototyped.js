const method = (arr: any[], value: any) => value ? arr.reduce((a, v) => a + (v === value), 0) : arr.length;

export = method;
