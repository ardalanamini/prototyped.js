import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $camelCaseKeys(): object;
  }
}

/**
 * Creates a new object from the specified object, where all the keys are in camel-case
 * @memberof Object.prototype
 * @returns {Object}
 * @example
 * const myObj = { First_name: "Adam", "last-name": "Smith" };
 * const myObjLower = myObj.$camelCaseKeys(); // {firstName: "Adam", lastName: "Smith"}
 */
function $camelCaseKeys(this: object): object {
  return method(this);
}

addPrototype("$camelCaseKeys", $camelCaseKeys);
