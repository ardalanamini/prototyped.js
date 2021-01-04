import "../../src/object/reduce";

describe("Object.prototype.$reduce", () => {
  test("({foo:1, bar:2}).$reduce((prev, value, key) => [...prev, key + ':'' + value], []); ['foo:1', 'bar:2']", () => {
    expect(
      { foo: 1, bar: 2 }.$reduce(
        (prev, value, key) => [...prev, `${key}:${value}`],
        [] as any[],
      ),
    ).toEqual(["foo:1", "bar:2"]);
  });

  test("({foo:1, bar:2}).$reduce((prev = [], value, key) => [...prev, key + ':'' + value]); ['foo:1', 'bar:2']", () => {
    expect(
      { foo: 1, bar: 2 }.$reduce((prev = [], value, key) => [
        ...prev,
        `${key}:${value}`,
      ]),
    ).toEqual(["foo:1", "bar:2"]);
  });
});
