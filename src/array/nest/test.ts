import "./index";

describe("Array.prototype.nest", () => {
  test("Array.prototype.nest", () => {
    const comments = [
      { id: 1, comment_id: null },
      { id: 2, comment_id: 1 },
      { id: 3, comment_id: 1 },
      { id: 4, comment_id: 2 },
      { id: 5, comment_id: 4 },
    ];

    expect(comments.nest("comment_id")).toEqual([
      {
        id: 1,
        comment_id: null,
        children: [
          {
            id: 2,
            comment_id: 1,
            children: [
              {
                id: 4,
                comment_id: 2,
                children: [
                  {
                    id: 5,
                    comment_id: 4,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            comment_id: 1,
            children: [],
          },
        ],
      },
    ]);
  });
});
