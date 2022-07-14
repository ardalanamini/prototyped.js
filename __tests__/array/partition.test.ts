import "prototyped.js/shim";

describe("Array.prototype.partition", () => {
  test(
    '[{ user: "barney", active: false }, { user: "fred", active: true }]'
    + '.partition(o => o.active) returns [[{ user: "fred", active: true }],[{ user: "barney", active: false }]]',
    () => {
      expect([
        {
          user  : "barney",
          active: false,
        },
        {
          user  : "fred",
          active: true,
        },
      ].partition(o => o.active)).toEqual([
        [
          {
            user  : "fred",
            active: true,
          },
        ],
        [
          {
            user  : "barney",
            active: false,
          },
        ],
      ]);
    },
  );
});
