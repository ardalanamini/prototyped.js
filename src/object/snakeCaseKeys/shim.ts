import { addPrototype } from "../../utils.js";
import snakeCaseKeys from "./index.js";

declare global {
  interface Object {
    /**
     * Creates a new object from the specified object, where all the keys are in snake-case
     * @example
     * const myObj = { FirstName: "Adam", "last-name": "Smith" };
     * const myObjLower = myObj.$snakeCaseKeys(); // {first_name: "Adam", last_name: "Smith"}
     */
    $snakeCaseKeys(): Record<string, unknown>;
  }
}

addPrototype(Object, "$snakeCaseKeys", snakeCaseKeys);
