const method = (arr: any[], field?: string) => {
    const iterator = (item: any) => item !== null && item !== undefined;

    if (field) {
        const keys = (field as string).split(".");
        const reducer = (item: any) => keys.reduce((prev, curr) => prev[curr], item);

        return arr.filter((item) => iterator(reducer(item)));
    }

    return arr.filter(iterator);
};

export = method;
