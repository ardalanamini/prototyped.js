/**
 * Deep flattens an array
 * @param array
 * @example
 * deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
 */
export default function deepFlatten<Value>(array: NestedArrayT<Value>): Value[] {
  return ([] as Value[]).concat(...array.map(value => (Array.isArray(value) ? deepFlatten(value) : value)));
}

export type NestedArrayT<Value> = Array<NestedArrayT<Value> | Value>;
