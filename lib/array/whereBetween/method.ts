const method = (arr: any[], field: string | any, start: any, end?: any) => {
    if (end === undefined) {
        end = start as any;
        start = field as any;
        field = undefined as any;
    }

    const iterator = (item: any) => item >= start && item <= end;

    if (field) {
        const keys = (field as string).split(".");
        const reducer = (item: any) => keys.reduce((prev, curr) => prev[curr], item);

        return arr.filter((item) => iterator(reducer(item)));
    }

    return arr.filter(iterator);
};

export = method;
