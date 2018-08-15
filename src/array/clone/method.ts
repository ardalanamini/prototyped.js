const method = (arr: any[], deep = false) => {
  if (!deep) return [...arr];

  const clone: any = Object.assign({}, arr);

  Object.keys(clone).forEach(
    (key) => (clone[key] = typeof (arr as any)[key] === "object" ? method((arr as any)[key], true) : (arr as any)[key]),
  );

  return Array.isArray(arr) ? (clone.length = arr.length) && Array.from(clone) : clone;
};

export = method;
