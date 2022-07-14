import kebabCase from "../../string/kebabCase/index.js";
import forEach from "../forEach/index.js";

/**
 * Creates a new object from the specified object, where all the keys are in kebab-case
 * @param obj
 * @example
 * const myObj = { First_name: "Adam", lastName: "Smith" };
 * const myObjLower = kebabCaseKeys(myObj); // {first-name: "Adam", last-name: "Smith"}
 */
export default function kebabCaseKeys(obj: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  forEach(obj, (value, key) => (result[kebabCase(key)] = value));

  return result;
}
