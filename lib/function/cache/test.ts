import "./index";

describe("Function.prototype.cache", () => {
  test("Math.max.cache(1, 22, 15) returns 22", () => {
    expect(Math.max.cache(1, 22, 15))
      .toBe(22);
  });
});
