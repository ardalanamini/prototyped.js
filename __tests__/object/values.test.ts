import "../../src/object/values";

describe("Object.prototype.$values", () => {
  test("{ one: 1, two: 2, three: 3 }.$values() returns [1, 2, 3]", () => {
    expect({ one: 1, two: 2, three: 3 }.$values()).toEqual([1, 2, 3]);
  });
});
