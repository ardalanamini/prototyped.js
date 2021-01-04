import "../../src/array/partition";

describe("Array.prototype.partition", () => {
  test(// tslint:disable-next-line: max-line-length
  '[{ user: "barney", active: false }, { user: "fred", active: true }].partition(o => o.active) returns [[{ user: "fred", active: true }],[{ user: "barney", active: false }]]', () => {
    expect(
      [
        { user: "barney", active: false },
        { user: "fred", active: true },
      ].partition(o => o.active),
    ).toEqual([
      [{ user: "fred", active: true }],
      [{ user: "barney", active: false }],
    ]);
  });
});
