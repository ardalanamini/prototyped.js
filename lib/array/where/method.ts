import * as types from "../../types";
import { filter } from "../utils";

const method = (arr: any[], field: string | types.Operator | any, operator?: types.Operator | any, value?: any) => {
    if (operator === undefined) {
        value = field as any;
        field = undefined;
        operator = "=";
    } else if (value === undefined)
        if (["<", "<=", "=", "<>", ">=", ">"].indexOf(field) === -1) {
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
