import { pathToKeys } from "../../utils";

const method = (obj: object, path: string, value: any): any => {
  const keys = pathToKeys(path);
  const length = keys.length;
  let i = 0;

  for (; i < length - 1; i++) {
    obj = (obj as { [key: string]: any })[keys[i]];
  }

  (obj as { [key: string]: any })[keys[i]] = value;
};

export = method;
