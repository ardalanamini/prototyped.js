import * as sum from "../sum/method";

const method = (arr: any[], path?: string) => sum(arr, path) / arr.length;

export = method;
