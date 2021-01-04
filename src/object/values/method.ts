import reduce from "../reduce/method";

const method = <T extends Record<string, unknown>, K extends keyof T>(obj: T) =>
  reduce<T, K, Array<T[K]>>(
    obj,
    (prev, value) => {
      prev.push(value);

      return prev;
    },
    [],
  );

export = method;
