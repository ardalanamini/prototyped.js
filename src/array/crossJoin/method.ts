const method = (arr: any[], arr2: any[]) => {
  const joined: Array<[any, any]> = [];

  arr.map((item) => {
    arr2.map((value) => {
      joined.push([
        item,
        value,
      ]);
    });
  });

  return joined;
};

export = method;
