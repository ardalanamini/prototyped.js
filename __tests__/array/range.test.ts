import "../../src/shim";

describe("Array.range", () => {
  test("Array.range(5) returns [0,1,2,3,4,5]", () => {
    expect(Array.range(5)).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test("Array.range(7, 3) returns [3,4,5,6,7]", () => {
    expect(Array.range(7, 3)).toEqual([3, 4, 5, 6, 7]);
  });

  test("Array.range(9, 0, 2) returns [0,2,4,6,8]", () => {
    expect(Array.range(9, 0, 2)).toEqual([0, 2, 4, 6, 8]);
  });
});
