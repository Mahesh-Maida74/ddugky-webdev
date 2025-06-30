const comments = [
  { id: 1, user: "John", content: "Great post!", likes: "3" },
  { id: 2, user: "Saara", content: "Great post!", likes: "3" },
  { id: 3, user: "John", content: "Great post!", likes: "3" },
];

const result = {};
comments.forEach(function (comment) {
  const { user: userName, content: contentVal, likes: likesVal } = comment;

  if (result[userName] === undefined)
    result[userName] = { likes: 0, comments: [] };
  result[userName].likes += Number(likesVal);
  result[userName].comments.push(contentVal);
});

console.log(result);
