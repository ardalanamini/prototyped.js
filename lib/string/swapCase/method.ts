const method = (str: string) => str.replace(/\S/g, (c) => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());

export = method;
