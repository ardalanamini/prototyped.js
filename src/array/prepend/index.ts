export default function prepend<T>(arr: T[], value: T): number {
  const array = [...arr];

  arr.length = 0;

  return arr.push(...[value].concat(array));
}
