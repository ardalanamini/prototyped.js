import * as method from "./method";
import * as types from "../../types";

declare global {
  interface Array<T> {
    where(value: any): T[];
    where(field: string, value: any): T[];
    where(operator: types.Operator, value: any): T[];
    where(field: string, operator: types.Operator, value: any): T[];
  }
}

/**
 * Filters the array
 * @memberof Array
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
Array.prototype.where = function(field: string | types.Operator | any, operator?: types.Operator | any, value?: any) {
  return method(this, field, operator, value);
};
