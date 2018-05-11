import * as isString from "../../string/isInstance/method";

const method = (arr: any[], field: string | RegExp, value?: string | RegExp) => {
    if (value === undefined) {
        value = field as string | RegExp;
        field = undefined as any;
    }

    if (isString(value)) value = new RegExp(value, "i");

    const iterator = (item: any) => (value as RegExp).test(item);

    if (field) {
        const keys = (field as string).split(".");
        const reducer = (item: any) => keys.reduce((prev, curr) => prev[curr], item);

        return arr.filter((item) => iterator(reducer(item)));
    }

    return arr.filter(iterator);
};

export = method;
