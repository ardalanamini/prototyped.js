import "./index";

describe("Object.prototype.$empty", () => {
  test("{ a: 1 }.$empty() returns false", () => {
    expect({ a: 1 }.$empty()).toEqual(false);
  });

  test("{}.$empty() returns true", () => {
    expect({}.$empty()).toBe(true);
  });
});
