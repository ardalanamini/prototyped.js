import * as contains from "../contains/method";
import { pathToKeys } from "../../utils";

const method = (arr: any[], field?: string, order?: "asc" | "desc") => {
    if (field && contains(["asc", "desc"], field)) {
        order = field as ("asc" | "desc");
        field = undefined;
    }

    if (order === undefined) order = "asc";

    const iterator: (a: any, b: any) => number =
        order === "asc" ?
            ((a, b) => (a > b ? 1 : (a < b ? -1 : 0))) :
            ((a, b) => (a < b ? 1 : (a > b ? -1 : 0)));

    if (field) {
        const keys = pathToKeys(field as string);
        const reducer = (item: any) => keys.reduce((prev, cur) => prev[cur], item);

        return arr.sort((a, b) => iterator(reducer(a), reducer(b)));
    }

    return arr.sort(iterator);
};

export = method;
