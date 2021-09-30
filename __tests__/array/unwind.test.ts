import "@src/shim";

describe("Array.prototype.unwind", () => {
  test('[{foo: ["bar 1", "bar 2"]}, {foo: ["bar 3", "bar 4", "bar 5"]}].unwind("foo")', () => {
    expect(
      [
        { foo: ["bar 1", "bar 2"] },
        { foo: ["bar 3", "bar 4", "bar 5"] },
      ].unwind("foo"),
    ).toEqual([
      { foo: "bar 1" },
      { foo: "bar 2" },
      { foo: "bar 3" },
      { foo: "bar 4" },
      { foo: "bar 5" },
    ]);
  });
});
