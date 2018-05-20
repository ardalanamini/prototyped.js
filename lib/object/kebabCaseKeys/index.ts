import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $kebabCaseKeys(): object;
  }
}

/**
 * Creates a new object from the specified object, where all the keys are in kebab-case
 * @memberof Object.prototype
 * @returns {Object}
 * @example
 * const myObj = { First_name: "Adam", lastName: "Smith" };
 * const myObjLower = myObj.$kebabCaseKeys(); // {first-name: "Adam", last-name: "Smith"}
 */
function $kebabCaseKeys(this: object): object {
  return method(this);
}

addPrototype("$kebabCaseKeys", $kebabCaseKeys);
