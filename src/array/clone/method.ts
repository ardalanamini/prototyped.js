const method = <T = any>(arr: T[], deep = false): T[] => {
  if (!deep) return [...arr];

  const clone: any = Object.assign({}, arr);

  Object.keys(clone).forEach(
    (key) => (clone[key] = typeof (arr as any)[key] === "object" ? method((arr as any)[key], true) : (arr as any)[key]),
  );

  if (Array.isArray(arr)) {
    clone.length = arr.length;

    return Array.from(clone);
  }

  return clone;
};

export = method;
