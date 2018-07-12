const method = (arr: any[], nth: number) => arr.filter((e, i) => i % nth === nth - 1);

export = method;
