const filter = (arr: any[], link: string, key: string, id: any = null): any[] =>
  arr.filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: filter(arr, link, key, item[key]) }));

const method = (arr: any[], link: string = "parent_id", key: string = "id"): any[] => filter(arr, link, key);

export = method;
