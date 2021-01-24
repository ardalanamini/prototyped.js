import "../../src/shim";

describe("String.prototype.base64Decode", () => {
  test('"cHJvdG90eXBlZC5qcw==".base64Decode() returns "prototyped.js"', () => {
    expect("cHJvdG90eXBlZC5qcw==".base64Decode()).toBe("prototyped.js");
  });
});
