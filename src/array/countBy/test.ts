import ".";

describe("Array.prototype.countBy", () => {
  test("[6.1, 4.2, 6.3].countBy(Math.floor) returns {4: 1, 6: 2}", () => {
    expect([6.1, 4.2, 6.3].countBy(Math.floor)).toEqual({ 4: 1, 6: 2 });
  });

  test('["one", "two", "three"].countBy("length") returns {3: 2, 5: 1}', () => {
    expect(["one", "two", "three"].countBy("length")).toEqual({ 3: 2, 5: 1 });
  });
});
