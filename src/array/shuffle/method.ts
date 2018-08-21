const method = <T = any>(arr: T[]) => {
  let m = arr.length;

  while (m) {
    const i = Math.floor(Math.random() * m--);

    [arr[m], arr[i]] = [arr[i], arr[m]];
  }

  return arr;
};

export = method;
