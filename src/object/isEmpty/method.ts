import size from "../size/method";

const method = (obj: Record<string, unknown>) => size(obj) === 0;

export = method;
