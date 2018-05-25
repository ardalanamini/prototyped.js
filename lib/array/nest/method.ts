const method = (arr: any[], id: any = null, link: string = "parent_id"): any[] =>
  arr.filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: method(arr, item.id) }));

export = method;
