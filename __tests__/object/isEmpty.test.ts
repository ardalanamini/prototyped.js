import "@src/shim";

describe("Object.prototype.$isEmpty", () => {
  test("{ a: 1 }.$isEmpty() returns false", () => {
    expect({ a: 1 }.$isEmpty()).toBe(false);
  });

  test("{}.$isEmpty() returns true", () => {
    expect({}.$isEmpty()).toBe(true);
  });
});
