const method = (obj: { [key: string]: any }, deep: boolean = false): object => {
  if (!deep) return Object.assign({}, obj);

  const clone: any = Object.assign({}, obj);

  Object.keys(clone).forEach(
    (key) => (clone[key] = typeof obj[key] === "object" ? method(obj[key], true) : obj[key]),
  );

  return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
};

export = method;
