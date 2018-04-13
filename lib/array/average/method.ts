import * as sum from "../sum/method";

const method = (arr: any[], key?: string) => sum(arr, key) / arr.length;

export = method;
