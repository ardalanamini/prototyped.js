export default function crossJoin<T, P>(array1: T[], array2: P[]): [T, P][] {
  const joined: [T, P][] = [];

  array1.forEach((item) =>
    array2.forEach((value) => joined.push([item, value])),
  );

  return joined;
}
