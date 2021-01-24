export default function distinctBy<T>(
  array: T[],
  fn: (a: T, b: T) => boolean,
): T[] {
  const distinct: T[] = [];

  array.forEach((a) => {
    let had = false;

    for (let i = 0; i < distinct.length; i++) {
      if (!fn(a, distinct[i])) continue;

      had = true;

      break;
    }

    if (!had) distinct.push(a);
  });

  return distinct;
}
