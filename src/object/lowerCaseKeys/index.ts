import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Object {
    $lowerCaseKeys(): object;
  }
}

/**
 * Creates a new object from the specified object, where all the keys are in lowercase
 * @memberof Object.prototype
 * @function $lowerCaseKeys
 * @returns {Object}
 * @example
 * const myObj = { Name: "Adam", sUrnAME: "Smith" };
 * const myObjLower = myObj.$lowerCaseKeys(); // {name: "Adam", surname: "Smith"}
 */
addPrototype(Object, "$lowerCaseKeys", method);
