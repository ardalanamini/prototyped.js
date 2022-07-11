import where from "./index.js";
import { addPrototype, OperatorT } from "../../utils.js";

declare global {
  interface Array<T> {
    where(value: unknown): T[];

    where(field: string, value: unknown): T[];

    where(operator: OperatorT, value: unknown): T[];

    where(field: string, operator: OperatorT, value: unknown): T[];
  }
}

/**
 * Filters the array
 * @memberof Array.prototype
 * @function where
 * @param {String|*} field
 * @param {String|*} [operator]
 * @param {*} [value]
 * @returns {Array}
 * @example
 * [1, 2, 2, 3, 4, 4, 5].where(4); // [4,4]
 * [{count:1}, {count:20}, {count:15}].where("count", 15); // [{count:15}]
 * [1, 2, 2, 3, 4, 4, 5].where("<", 4); // [1,2,2,3]
 * [{count:1}, {count:20}, {count:15}].where("count", ">=", 15); // [{count:20},{count:15}]
 */
addPrototype(Array, "where", where);
