import ".";

describe("Date.isDate", () => {
  test('Date.isDate("foo bar") returns false', () => {
    expect(Date.isDate("foo bar")).toBe(false);
  });

  test("Date.isDate(new Date()) returns true", () => {
    expect(Date.isDate(new Date())).toBe(true);
  });
});
