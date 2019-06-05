import ".";

describe("Object.prototype.$keys", () => {
  test('{ one: 1, two: 2, three: 3 }.$keys() returns ["one", "two", "three"]', () => {
    expect({ one: 1, two: 2, three: 3 }.$keys()).toEqual([
      "one",
      "two",
      "three",
    ]);
  });
});
