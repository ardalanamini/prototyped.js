import { filter, Operator, OPERATOR } from "../../utils";
import contains from "../contains/method";

const OPERATORS = [
  OPERATOR.LT,
  OPERATOR.LTE,
  OPERATOR.EQ,
  OPERATOR.NE,
  OPERATOR.GTE,
  OPERATOR.GT,
];

const method = <T = any>(
  arr: T[],
  field: string | Operator | any,
  operator?: Operator | any,
  value?: any,
) => {
  if (operator === undefined) {
    value = field as any;
    field = undefined;
    operator = OPERATOR.EQ;
  } else if (value === undefined) {
    if (!contains(OPERATORS, field)) {
      value = operator as any;
      operator = OPERATOR.EQ;
    } else {
      value = operator as any;
      operator = field as Operator;
      field = undefined;
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
      throw new TypeError(
        `Expected 'operator' to be one of ${OPERATORS}, got ${operator}`,
      );
  }

  return filter(arr, field, iterator);
};

export = method;
