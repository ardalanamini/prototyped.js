const method = (str: string) => {
  str = (
    str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g) || [""]
  ).map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()).join("");

  return str.slice(0, 1).toLowerCase() + str.slice(1);
};

export = method;
