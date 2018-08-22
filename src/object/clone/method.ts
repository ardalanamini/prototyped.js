import { deepClone } from "../../utils";

const method = (obj: object, deep: boolean = false): object => deep ?
  deepClone(obj) :
  Object.assign({}, obj);

export = method;
