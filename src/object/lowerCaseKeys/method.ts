import forEach from "../forEach/method";

const method = (obj: Record<string, unknown>): Record<string, unknown> => {
  const result: { [key: string]: any } = {};

  forEach(obj, (value, key: string) => (result[key.toLowerCase()] = value));

  return result;
};

export = method;
