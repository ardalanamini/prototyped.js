const method = (str: string, str2: string, sensitive = false): boolean => {
  if (sensitive) return str.indexOf(str2) !== -1;

  return str.toLowerCase().indexOf(str2.toLowerCase()) !== -1;
};

export = method;
