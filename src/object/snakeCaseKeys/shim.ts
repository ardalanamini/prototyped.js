import snakeCaseKeys from ".";
import { addPrototype } from "../../utils";

declare global {
  interface Object {
    $snakeCaseKeys(): Record<string, unknown>;
  }
}

/**
 * Creates a new object from the specified object, where all the keys are in snake-case
 * @memberof Object.prototype
 * @function $snakeCaseKeys
 * @returns {Object}
 * @example
 * const myObj = { FirstName: "Adam", "last-name": "Smith" };
 * const myObjLower = myObj.$snakeCaseKeys(); // {first_name: "Adam", last_name: "Smith"}
 */
addPrototype(Object, "$snakeCaseKeys", snakeCaseKeys);
