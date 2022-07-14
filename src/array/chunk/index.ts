/**
 * Chunks the array into smaller arrays of a specified size
 * @param array
 * @param size
 * @example
 * chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
 */
export default function chunk<Value>(array: Value[], size: number): Value[][] {
  return Array.from(
    {
      length: Math.ceil(array.length / size),
    },
    (value, index) => array.slice(index * size, (index * size) + size),
  );
}
