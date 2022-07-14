import { addPrototype } from "../../utils.js";
import kebabCaseKeys from "./index.js";

declare global {
  interface Object {

    /**
     * Creates a new object from the specified object, where all the keys are in kebab-case
     * @example
     * const myObj = { First_name: "Adam", lastName: "Smith" };
     * const myObjLower = myObj.$kebabCaseKeys(); // {first-name: "Adam", last-name: "Smith"}
     */
    $kebabCaseKeys(): Record<string, unknown>;
  }
}

addPrototype(Object, "$kebabCaseKeys", kebabCaseKeys);
