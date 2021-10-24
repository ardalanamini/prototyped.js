import camelCaseKeys from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Object {
    $camelCaseKeys(): Record<string, unknown>;
  }
}

/**
 * Creates a new object from the specified object, where all the keys are in camel-case
 * @memberof Object.prototype
 * @function $camelCaseKeys
 * @returns {Object}
 * @example
 * const myObj = { First_name: "Adam", "last-name": "Smith" };
 * const myObjLower = myObj.$camelCaseKeys(); // {firstName: "Adam", lastName: "Smith"}
 */
addPrototype(Object, "$camelCaseKeys", camelCaseKeys);
