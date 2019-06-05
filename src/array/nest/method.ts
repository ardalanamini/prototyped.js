const filter = (arr: any[], link: string, key: string, id: any = null): any[] =>
  arr
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: filter(arr, link, key, item[key]) }));

const method = <T = any>(
  arr: T[],
  link: string = "parent_id",
  key: string = "id",
) => filter(arr, link, key);

export = method;
