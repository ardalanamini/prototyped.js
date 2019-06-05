import ".";

describe("String.prototype.base64", () => {
  test('"prototyped.js".base64() returns "cHJvdG90eXBlZC5qcw=="', () => {
    expect("prototyped.js".base64()).toBe("cHJvdG90eXBlZC5qcw==");
  });
});
