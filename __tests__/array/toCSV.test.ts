import "prototyped.js/shim";

describe("Array.prototype.toCSV", () => {
  test("[['a', 'b'], ['c', 'd']].toCSV() returns '\"a\",\"b\"\\n\"c\",\"d\"'", () => {
    expect([
      ["a", "b"],
      ["c", "d"],
    ].toCSV()).toBe('"a","b"\n"c","d"');
  });

  test("[['a', 'b'], ['c', 'd']].toCSV(\";\") returns '\"a\";\"b\"\\n\"c\";\"d\"'", () => {
    expect([
      ["a", "b"],
      ["c", "d"],
    ].toCSV(";")).toBe('"a";"b"\n"c";"d"');
  });
});
