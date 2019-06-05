import ".";

describe("Object.prototype.$dig", () => {
  const data = {
    level1: {
      level2: {
        level3: "some data",
      },
      foo: "bar",
    },
  };

  test('data.$dig("foo") returns "bar"', () => {
    expect(data.$dig("foo")).toBe("bar");
  });

  test('data.$dig("level3") returns "some data"', () => {
    expect(data.$dig("level3")).toBe("some data");
  });

  test('data.$dig("level4") returns undefined', () => {
    expect(data.$dig("level4")).toBe(undefined);
  });
});
