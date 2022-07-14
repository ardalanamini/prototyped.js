import "prototyped.js/shim";

describe("Array.prototype.sortBy", () => {
  test("['five', 'three', 'one'].sortBy('length') returns ['one', 'five', 'three']", () => {
    expect(["five", "three", "one"].sortBy("length")).toEqual([
      "one",
      "five",
      "three",
    ]);
  });

  test("['five', 'three', 'one'].sortBy((value) => -value.length) returns ['three', 'five', 'one']", () => {
    expect(["five", "three", "one"].sortBy(value => -value.length)).toEqual([
      "three",
      "five",
      "one",
    ]);
  });
});
