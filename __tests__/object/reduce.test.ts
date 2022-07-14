import "prototyped.js/shim";

describe("Object.prototype.$reduce", () => {
  test("({foo:1, bar:2}).$reduce((prev, value, key) => [...prev, key + ':'' + value], []); ['foo:1', 'bar:2']", () => {
    expect({
      foo: 1,
      bar: 2,
    }.$reduce(
      (prev, value, key) => [...prev, `${ key }:${ value }`],
      [] as any[],
    )).toEqual(["foo:1", "bar:2"]);
  });

  test("({foo:1, bar:2}).$reduce((prev = [], value, key) => [...prev, key + ':'' + value]); ['foo:1', 'bar:2']", () => {
    expect({
      foo: 1,
      bar: 2,
      // eslint-disable-next-line @typescript-eslint/default-param-last
    }.$reduce((prev = [], value, key) => [
      ...prev,
      `${ key }:${ value }`,
    ])).toEqual(["foo:1", "bar:2"]);
  });
});
