import { filter } from "../utils";

const method = (arr: any[], field?: string) => {
    const iterator = (item: any) => item === null || item === undefined;

    return filter(arr, field, iterator);
};

export = method;
