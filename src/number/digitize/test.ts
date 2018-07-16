import "./index";

describe("Number.prototype.digitize", () => {
  test("Number.digitize(123) returns [1, 2, 3]", () => {
    expect(Number.digitize(123)).toEqual([1, 2, 3]);
  });
});
