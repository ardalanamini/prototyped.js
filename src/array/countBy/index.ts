export default function countBy<Value>(
  array: Value[],
  fn: string | ((value: Value, index: number, array: Value[]) => any),
): { [key: string]: number } {
  return array
    .map(typeof fn === "function" ? fn : (value: any) => value[fn])
    .reduce((prev, value: string) => {
      prev[value] = (prev[value] || 0) + 1;

      return prev;
    }, {});
}
