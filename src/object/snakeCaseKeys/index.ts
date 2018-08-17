import * as method from "./method";

declare global {
  interface Object {
    $snakeCaseKeys(): object;
  }
}

/**
 * Creates a new object from the specified object, where all the keys are in snake-case
 * @memberof Object
 * @returns {Object}
 * @example
 * const myObj = { FirstName: "Adam", "last-name": "Smith" };
 * const myObjLower = myObj.$snakeCaseKeys(); // {first_name: "Adam", last_name: "Smith"}
 */
Object.prototype.$snakeCaseKeys = function() {
  return method(this);
};
