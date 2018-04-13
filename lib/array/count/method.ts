const method = (arr: any[], value: any) => value ? arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0) : arr.length;

export = method;
