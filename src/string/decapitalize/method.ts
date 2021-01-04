const method = (str: string, allWords = false): string => {
  if (allWords) return str.replace(/\b[A-Z]/g, (char) => char.toLowerCase());

  return str.replace(/^[A-Z]/, (char) => char.toLowerCase());
};

export = method;
