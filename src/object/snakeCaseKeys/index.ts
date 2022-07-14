import snakeCase from "../../string/snakeCase/index.js";
import forEach from "../forEach/index.js";

/**
 * Creates a new object from the specified object, where all the keys are in snake-case
 * @param obj
 * @example
 * const myObj = { FirstName: "Adam", "last-name": "Smith" };
 * const myObjLower = snakeCaseKeys(myObj); // {first_name: "Adam", last_name: "Smith"}
 */
export default function snakeCaseKeys(obj: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  forEach(obj, (value, key) => (result[snakeCase(key)] = value));

  return result;
}
