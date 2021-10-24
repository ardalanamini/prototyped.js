import "prototyped.js/shim";

describe("Array.prototype.implode", () => {
  test(
    '[{a: {b: "first"}}, {a: {b: "second"}}, {a: {b: "third"}}].implode("a.b", ", ")' +
      ' returns "first, second, third"',
    () => {
      expect(
        [
          { a: { b: "first" } },
          { a: { b: "second" } },
          { a: { b: "third" } },
        ].implode("a.b", ", "),
      ).toBe("first, second, third");
    },
  );

  test(
    '[{a: {b: "first"}}, {a: {b: "second"}}, {a: {b: "third"}}].implode("a.c")' +
      ' returns ""',
    () => {
      expect(
        [
          { a: { b: "first" } },
          { a: { b: "second" } },
          { a: { b: "third" } },
        ].implode("a.c" as never),
      ).toBe("");
    },
  );
});
