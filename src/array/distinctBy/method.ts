const method = <T = any>(arr: T[], fn: (a: T, b: T) => boolean) => {
  const distinct: T[] = [];

  arr.forEach((a) => {
    let had = false;

    for (let i = 0; i < distinct.length; i++) {
      if (!fn(a, distinct[i])) continue;

      had = true;

      break;
    }

    if (!had) distinct.push(a);
  });

  return distinct;
};

export = method;
