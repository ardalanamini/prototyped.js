import "./index";

describe("Object.prototype.$size", () => {
  test("{ one: 1, two: 2, three: 3 }.$size() returns 3", () => {
    expect({ one: 1, two: 2, three: 3 }.$size())
      .toBe(3);
  });
});
