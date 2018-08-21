import { filter } from "../utils";

const method = <T = any>(arr: T[], field: string | any[], value?: any[]) => {
    if (value === undefined) {
        value = field as any[];
        field = undefined as any;
    }

    const iterator = (item: any) => (value as any[]).indexOf(item) === -1;

    return filter(arr, field as string, iterator);
};

export = method;
