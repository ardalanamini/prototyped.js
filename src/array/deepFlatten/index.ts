export default function deepFlatten<Value>(
  array: NestedArrayT<Value>,
): Value[] {
  return ([] as Value[]).concat(
    ...array.map((value) =>
      Array.isArray(value) ? deepFlatten(value) : value,
    ),
  );
}

export type NestedArrayT<Value> = (Value | NestedArrayT<Value>)[];
