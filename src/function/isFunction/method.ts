// eslint-disable-next-line @typescript-eslint/ban-types
const method = (arg: any): arg is Function => typeof arg === "function";

export = method;
