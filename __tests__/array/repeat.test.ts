import "prototyped.js/shim";

describe("Array.repeat", () => {
  test("Array.repeat(5, 2) returns [2,2,2,2,2]", () => {
    expect(Array.repeat(5, 2)).toEqual([2, 2, 2, 2, 2]);
  });

  test("Array.repeat(2) returns [0,0]", () => {
    expect(Array.repeat(2)).toEqual([0, 0]);
  });
});
