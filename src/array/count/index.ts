export default function count<Value>(array: Value[], value?: Value): number {
  return value
    ? array.reduce((a, v) => a + Number(v === value), 0)
    : array.length;
}
