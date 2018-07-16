import { filter } from "../utils";

const method = (arr: any[], field: string | any, start: any, end?: any) => {
    if (end === undefined) {
        end = start as any;
        start = field as any;
        field = undefined as any;
    }

    const iterator = (item: any) => item >= start && item <= end;

    return filter(arr, field, iterator);
};

export = method;
