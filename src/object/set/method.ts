import { pathToKeys } from "../../utils";

const method = (obj: { [key: string]: any }, path: string, value: any): any => {
  const keys = pathToKeys(path);
  let i = 0;

  for (; i < keys.length - 1; i++)
    obj = obj[keys[i]];

  obj[keys[i]] = value;
};

export = method;
