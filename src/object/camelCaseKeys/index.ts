import camelCase from "../../string/camelCase/index.js";
import forEach from "../forEach/index.js";

/**
 * Creates a new object from the specified object, where all the keys are in camel-case
 * @param obj
 * @example
 * const myObj = { First_name: "Adam", "last-name": "Smith" };
 * const myObjLower = camelCaseKeys(myObj); // {firstName: "Adam", lastName: "Smith"}
 */
export default function camelCaseKeys(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  forEach(obj, (value, key) => (result[camelCase(key)] = value));

  return result;
}
