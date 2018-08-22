import * as types from "../../types";
import * as contains from "../contains/method";
import { filter } from "../../utils";

const method = <T = any>(
    arr: T[], field: string | types.Operator | any,
    operator?: types.Operator | any, value?: any
) => {
    if (operator === undefined) {
        value = field as any;
        field = undefined;
        operator = "=";
    } else if (value === undefined)
        if (!contains(["<", "<=", "=", "<>", ">=", ">"], field)) {
            value = operator as any;
            operator = "=";
        } else {
            value = operator as any;
            operator = field as types.Operator;
            field = undefined;
        }

    let iterator: (item: any) => boolean;
    switch (operator) {
        case "<":
            iterator = (item) => item < value;
            break;
        case "<=":
            iterator = (item) => item <= value;
            break;
        case "=":
            iterator = (item) => item === value;
            break;
        case "<>":
            iterator = (item) => item !== value;
            break;
        case ">=":
            iterator = (item) => item >= value;
            break;
        case ">":
            iterator = (item) => item > value;
            break;
        default:
            throw new TypeError(`Expected 'operator' to be one of ['<', '<=', '=', '<>', '>=', '>'], got ${operator}`);
    }

    return filter(arr, field, iterator);
};

export = method;
