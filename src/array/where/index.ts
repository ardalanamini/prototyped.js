import { addPrototype, Operator } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    where(value: any): T[];
    where(field: string, value: any): T[];
    // tslint:disable-next-line: unified-signatures
    where(operator: Operator, value: any): T[];
    where(field: string, operator: Operator, value: any): T[];
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
addPrototype(Array, "where", method);
