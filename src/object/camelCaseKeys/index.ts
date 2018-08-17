import * as method from "./method";

declare global {
  interface Object {
    $camelCaseKeys(): object;
  }
}

/**
 * Creates a new object from the specified object, where all the keys are in camel-case
 * @memberof Object
 * @returns {Object}
 * @example
 * const myObj = { First_name: "Adam", "last-name": "Smith" };
 * const myObjLower = myObj.$camelCaseKeys(); // {firstName: "Adam", lastName: "Smith"}
 */
Object.prototype.$camelCaseKeys = function() {
  return method(this);
};
