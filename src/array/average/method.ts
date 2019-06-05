import sum from "../sum/method";

const method = <T = any>(arr: T[], path?: string) =>
  sum(arr, path) / arr.length;

export = method;
