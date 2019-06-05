import ".";

describe("String.prototype.pad", () => {
  test('"123".pad(2) returns "123"', () => {
    expect("123".pad(2)).toEqual("123");
  });

  test('"123".pad(5) returns "123  "', () => {
    expect("123".pad(5)).toEqual("123  ");
  });

  test('"123".pad(-5, "1") returns "11123"', () => {
    expect("123".pad(-5, "1")).toEqual("11123");
  });
});
