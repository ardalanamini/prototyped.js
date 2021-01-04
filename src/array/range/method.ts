const method = (end: number, start = 0, step = 1): number[] =>
  Array.from({
    length: Math.ceil((end + 1 - start) / step),
  }).map((value, index) => index * step + start);

export = method;
