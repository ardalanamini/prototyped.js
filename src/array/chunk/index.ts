export default function chunk<Value>(array: Value[], size: number): Value[][] {
  return Array.from(
    {
      length: Math.ceil(array.length / size),
    },
    (value, index) => array.slice(index * size, index * size + size),
  );
}
