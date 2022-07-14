import "prototyped.js/shim";

describe("Array.prototype.compact", () => {
  test('[0,1,false,2,"",3,"a","e" * 23,NaN,"s",34].compact() returns [1,2,3,"a","s",34]', () => {
    expect([
      0 as const,
      1,
      false as const,
      2,
      "" as const,
      3,
      "a",
      ("e" as never) * 23,
      NaN,
      "s",
      34,
    ].compact()).toEqual([1, 2, 3, "a", "s", 34]);
  });
});
