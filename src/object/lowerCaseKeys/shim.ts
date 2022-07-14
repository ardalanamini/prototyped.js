import { addPrototype } from "../../utils.js";
import lowerCaseKeys from "./index.js";

declare global {
  interface Object {

    /**
     * Creates a new object from the specified object, where all the keys are in lowercase
     * @example
     * const myObj = { Name: "Adam", sUrnAME: "Smith" };
     * const myObjLower = myObj.$lowerCaseKeys(); // {name: "Adam", surname: "Smith"}
     */
    $lowerCaseKeys(): Record<string, unknown>;
  }
}

addPrototype(Object, "$lowerCaseKeys", lowerCaseKeys);
