import { pathToKeys } from "../../utils";

const method = (obj: { [key: string]: any }, key: string): any => pathToKeys(key)
  .reduce((prev, cur) => prev[cur], obj);

export = method;
