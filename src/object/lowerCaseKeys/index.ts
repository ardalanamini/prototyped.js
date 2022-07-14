import forEach from "../forEach/index.js";

/**
 * Creates a new object from the specified object, where all the keys are in lowercase
 * @example
 * const myObj = { Name: "Adam", sUrnAME: "Smith" };
 * const myObjLower = lowerCaseKeys(myObj); // {name: "Adam", surname: "Smith"}
 */
export default function lowerCaseKeys(obj: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  forEach(obj, (value, key) => (result[key.toLowerCase()] = value));

  return result;
}
