import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $snakeCaseKeys(): object;
  }
}

/**
 * Creates a new object from the specified object, where all the keys are in snake-case
 * @memberof Object.prototype
 * @returns {Object}
 * @example
 * const myObj = { FirstName: "Adam", "last-name": "Smith" };
 * const myObjLower = myObj.$snakeCaseKeys(); // {first_name: "Adam", last_name: "Smith"}
 */
function $snakeCaseKeys(this: object): object {
  return method(this);
}

addPrototype("$snakeCaseKeys", $snakeCaseKeys);
