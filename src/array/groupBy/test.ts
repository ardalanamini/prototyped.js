import ".";

describe("Array.prototype.groupBy", () => {
  test("[6.1, 4.2, 6.3].groupBy(Math.floor) returns {4: [4.2], 6: [6.1, 6.3]}", () => {
    expect([6.1, 4.2, 6.3].groupBy(Math.floor)).toEqual({
      4: [4.2],
      6: [6.1, 6.3],
    });
  });

  // tslint:disable-next-line: max-line-length
  test('["one", "two", "three"].groupBy("length") returns {3: ["one", "two"], 5: ["three"]}', () => {
    expect(["one", "two", "three"].groupBy("length")).toEqual({
      3: ["one", "two"],
      5: ["three"],
    });
  });
});
