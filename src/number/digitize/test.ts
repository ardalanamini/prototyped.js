import ".";

describe("Number.prototype.digitize", () => {
  test("(123).digitize() returns [1, 2, 3]", () => {
    expect((123).digitize()).toEqual([1, 2, 3]);
  });
});
