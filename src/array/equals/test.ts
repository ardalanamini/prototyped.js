import "./index";

describe("Array.prototype.equals", () => {
  test("[1,2,{hello: [\"world\", true]}].equals([1,2,{hello: [\"world\", true]}]) returns true", () => {
    expect([1, 2, { hello: ["world", true] }].equals([1, 2, { hello: ["world", true] }])).toBe(true);
  });

  test("[1,2,{hello: [\"world\", true]}].equals([1,2,{hello: [\"world\", null]}]) returns false", () => {
    expect([1, 2, { hello: ["world", true] }].equals([1, 2, { hello: ["world", null] }])).toBe(false);
  });

  test("[1,2,3].equals([2,1,3]) returns false", () => {
    expect([1, 2, 3].equals([2, 1, 3])).toBe(false);
  });
});
