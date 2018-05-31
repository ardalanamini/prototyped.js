import * as isString from "../../string/isString/method";
import { filter } from "../utils";

const method = (arr: any[], field: string | RegExp, value?: string | RegExp) => {
    if (value === undefined) {
        value = field as string | RegExp;
        field = undefined as any;
    }

    if (isString(value)) value = new RegExp(value, "i");

    const iterator = (item: any) => (value as RegExp).test(item);

    return filter(arr, field as string, iterator);
};

export = method;
