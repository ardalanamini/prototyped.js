const method = (arr: any[], field?: string, order?: "asc" | "desc") => {
    if (field && (["asc", "desc"].indexOf(field) !== -1)) {
        order = field as ("asc" | "desc");
        field = undefined;
    }

    if (order === undefined) order = "asc";

    const iterator: (a: any, b: any) => number =
        order === "asc" ?
            ((a, b) => (a > b ? 1 : (a < b ? -1 : 0))) :
            ((a, b) => (a < b ? 1 : (a > b ? -1 : 0)));

    if (field) {
        const keys = (field as string).split(".");
        const reducer = (item: any) => keys.reduce((prev, curr) => prev[curr], item);

        return arr.sort((a, b) => iterator(reducer(a), reducer(b)));
    }

    return arr.sort(iterator);
};

export = method;
