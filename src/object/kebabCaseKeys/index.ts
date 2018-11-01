import { addPrototype } from "../../utils";
import * as method from "./method";

declare global {
  interface Object {
    $kebabCaseKeys(): object;
  }
}

/**
 * Creates a new object from the specified object, where all the keys are in kebab-case
 * @memberof Object.prototype
 * @function $kebabCaseKeys
 * @returns {Object}
 * @example
 * const myObj = { First_name: "Adam", lastName: "Smith" };
 * const myObjLower = myObj.$kebabCaseKeys(); // {first-name: "Adam", last-name: "Smith"}
 */
addPrototype(Object, "$kebabCaseKeys", method);
