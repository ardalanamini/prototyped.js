import { addPrototype } from "../../utils.js";
import camelCaseKeys from "./index.js";

declare global {
  interface Object {
    /**
     * Creates a new object from the specified object, where all the keys are in camel-case
     * @example
     * const myObj = { First_name: "Adam", "last-name": "Smith" };
     * const myObjLower = myObj.$camelCaseKeys(); // {firstName: "Adam", lastName: "Smith"}
     */
    $camelCaseKeys(): Record<string, unknown>;
  }
}

addPrototype(Object, "$camelCaseKeys", camelCaseKeys);
