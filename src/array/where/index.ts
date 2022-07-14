/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { filter, OPERATOR, OperatorT } from "../../utils.js";
import contains from "../contains/index.js";

const OPERATORS = [
  OPERATOR.LT,
  OPERATOR.LTE,
  OPERATOR.EQ,
  OPERATOR.NE,
  OPERATOR.GTE,
  OPERATOR.GT,
];

/**
 * Filters the array
 * @param arr
 * @param value
 * @example
 * where([1, 2, 2, 3, 4, 4, 5], 4); // [4,4]
 */
function where<T>(arr: T[], value: unknown): T[];

/**
 * Filters the array
 * @param arr
 * @param field
 * @param value
 * @example
 * where([{count:1}, {count:20}, {count:15}], "count", 15); // [{count:15}]
 */
function where<T>(arr: T[], field: string, value: unknown): T[];

/**
 * Filters the array
 * @param arr
 * @param operator
 * @param value
 * @example
 * where([1, 2, 2, 3, 4, 4, 5], "<", 4); // [1,2,2,3]
 */
function where<T>(arr: T[], operator: OperatorT, value: unknown): T[];

/**
 * Filters the array
 * @param arr
 * @param field
 * @param operator
 * @param value
 * @example
 * where([{count:1}, {count:20}, {count:15}], "count", ">=", 15); // [{count:20},{count:15}]
 */
function where<T>(
  arr: T[],
  field: string,
  operator: OperatorT,
  value: unknown,
): T[];
// eslint-disable-next-line max-params
function where<T>(
  arr: T[],
  field: OperatorT | any | string,
  operator?: OperatorT | any,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  value?: any,
): T[] {
  if (operator == null) {
    value = field;
    // eslint-disable-next-line no-undefined
    field = undefined;
    operator = OPERATOR.EQ;
  } else if (value == null) {
    if (contains(OPERATORS, field)) {
      value = operator;
      operator = field as OperatorT;
      // eslint-disable-next-line no-undefined
      field = undefined;
    } else {
      value = operator;
      operator = OPERATOR.EQ;
    }
  }

  let iterator: (item: any) => boolean;
  switch (operator) {
    case OPERATOR.LT:
      iterator = item => item < value;
      break;
    case OPERATOR.LTE:
      iterator = item => item <= value;
      break;
    case OPERATOR.EQ:
      iterator = item => item === value;
      break;
    case OPERATOR.NE:
      iterator = item => item !== value;
      break;
    case OPERATOR.GTE:
      iterator = item => item >= value;
      break;
    case OPERATOR.GT:
      iterator = item => item > value;
      break;
    default:
      throw new TypeError(`Expected 'operator' to be one of ${ OPERATORS }, got ${ operator }`);
  }

  return filter(arr, field, iterator);
}

export default where;
