import forEach from "../forEach/method";

const method = (obj: object): object => {
  const result: { [key: string]: any } = {};

  forEach(obj, (value, key: string) => (result[key.toLowerCase()] = value));

  return result;
};

export = method;
