import "./index";

describe("Array.repeat", () => {
  test("Array.repeat(5, 2) returns [2,2,2,2,2]", () => {
    expect(Array.repeat(5, 2)).toEqual([2, 2, 2, 2, 2]);
  });
});
