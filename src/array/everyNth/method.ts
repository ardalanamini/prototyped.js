const method = <T = any>(arr: T[], nth: number) => arr.filter((e, i) => i % nth === nth - 1);

export = method;
