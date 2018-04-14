import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $lowerCaseKeys(): object;
  }
}

/**
 * Creates a new object from the specified object, where all the keys are in lowercase
 * @memberof Object.prototype
 * @returns {Object}
 * @example
 * const myObj = { Name: "Adam", sUrnAME: "Smith" };
 * const myObjLower = myObj.$lowerCaseKeys(); // {name: "Adam", surname: "Smith"}
 */
function $lowerCaseKeys(this: object): object {
  return method(this);
}

addPrototype("$lowerCaseKeys", $lowerCaseKeys);
