import range from "../../array/range";

export default function primes(num: number): number[] {
  let arr = range(num, 2);

  range(Math.floor(Math.sqrt(num)), 2).forEach(
    (x) => (arr = arr.filter((y) => y % x !== 0 || y === x)),
  );

  return arr;
}
