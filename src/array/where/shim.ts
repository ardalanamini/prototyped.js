import { OperatorT, addPrototype } from "../../utils.js";
import where from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Filters the array
     * @param value
     * @example
     * [1, 2, 2, 3, 4, 4, 5].where(4); // [4,4]
     */
    where(value: unknown): T[];

    /**
     * Filters the array
     * @param field
     * @param value
     * @example
     * [{count:1}, {count:20}, {count:15}].where("count", 15); // [{count:15}]
     */
    where(field: string, value: unknown): T[];

    /**
     * Filters the array
     * @param operator
     * @param value
     * @example
     * [1, 2, 2, 3, 4, 4, 5].where("<", 4); // [1,2,2,3]
     */
    where(operator: OperatorT, value: unknown): T[];

    /**
     * Filters the array
     * @param field
     * @param operator
     * @param value
     * @example
     * [{count:1}, {count:20}, {count:15}].where("count", ">=", 15); // [{count:20},{count:15}]
     */
    where(field: string, operator: OperatorT, value: unknown): T[];
  }
}

addPrototype(Array, "where", where);
