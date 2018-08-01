const method = (arg: any): arg is number => typeof arg === "number" || arg instanceof Number;

export = method;
