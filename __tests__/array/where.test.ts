import "../../src/array/where";

describe("Array.prototype.where", () => {
  test("[1, 2, 2, 3, 4, 4, 5].where(4) returns [4,4]", () => {
    expect([1, 2, 2, 3, 4, 4, 5].where(4)).toEqual([4, 4]);
  });

  test('[1, 2, 2, 3, 4, 4, 5].where("<", 4) returns [1,2,2,3]', () => {
    expect([1, 2, 2, 3, 4, 4, 5].where("<", 4)).toEqual([1, 2, 2, 3]);
  });

  test('[1, 2, 2, 3, 4, 4, 5].where("<=", 4) returns [1,2,2,3,4,4]', () => {
    expect([1, 2, 2, 3, 4, 4, 5].where("<=", 4)).toEqual([1, 2, 2, 3, 4, 4]);
  });

  test('[{count:1}, {count:20}, {count:15}].where("count", 15) returns [{count:15}]', () => {
    expect(
      [{ count: 1 }, { count: 20 }, { count: 15 }].where("count", 15),
    ).toEqual([{ count: 15 }]);
  });

  test('[{count:1}, {count:20}, {count:15}].where("count", "<>", 15) returns [{count:15}]', () => {
    expect(
      [{ count: 1 }, { count: 20 }, { count: 15 }].where("count", "<>", 15),
    ).toEqual([{ count: 1 }, { count: 20 }]);
  });

  test('[{count:1}, {count:20}, {count:15}].where("count", ">=", 15) returns [{count:20},{count:15}]', () => {
    expect(
      [{ count: 1 }, { count: 20 }, { count: 15 }].where("count", ">=", 15),
    ).toEqual([{ count: 20 }, { count: 15 }]);
  });

  test('[{count:1}, {count:20}, {count:15}].where("count", ">", 15) returns [{count:20}]', () => {
    expect(
      [{ count: 1 }, { count: 20 }, { count: 15 }].where("count", ">", 15),
    ).toEqual([{ count: 20 }]);
  });

  test('[{count:1}, {count:20}, {count:15}].where("count", "like", 15) throws TypeError', () => {
    expect(() =>
      [{ count: 1 }, { count: 20 }, { count: 15 }].where(
        "count",
        "like" as any,
        15,
      ),
    ).toThrowError(TypeError);
  });
});
