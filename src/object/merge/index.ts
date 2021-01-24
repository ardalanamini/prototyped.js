import keys from "../keys";

const hasOwnProperty = Object.prototype.hasOwnProperty;

export default function merge(
  obj: Record<string, unknown>,
  ...objects: Record<string, unknown>[]
): Record<string, unknown> {
  return [obj, ...objects].reduce(
    (prev: Record<string, unknown>, obj2: Record<string, unknown>) =>
      keys(obj2).reduce((a, k) => {
        prev[k] = hasOwnProperty.call(prev, k)
          ? [].concat(prev[k] as never).concat(obj2[k] as never)
          : obj2[k];

        return prev;
      }, {}),
    {},
  );
}
