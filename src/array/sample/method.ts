const method = (arr: any[]): any => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export = method;
