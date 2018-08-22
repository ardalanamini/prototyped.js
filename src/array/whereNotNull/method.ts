import { filter } from "../../utils";

const method = <T = any>(arr: T[], field?: string) => {
    const iterator = (item: any) => item !== null && item !== undefined;

    return filter(arr, field, iterator);
};

export = method;
