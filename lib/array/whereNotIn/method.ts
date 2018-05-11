const method = (arr: any[], field: string | any[], value?: any[]) => {
    if (value === undefined) {
        value = field as any[];
        field = undefined as any;
    }

    const iterator = (item: any) => (value as any[]).indexOf(item) === -1;

    if (field) {
        const keys = (field as string).split(".");
        const reducer = (item: any) => keys.reduce((prev, curr) => prev[curr], item);

        return arr.filter((item) => iterator(reducer(item)));
    }

    return arr.filter(iterator);
};

export = method;
