const users = [
  { id: 1, name: "Alice", tags: "js,react,css" },
  { id: 2, name: "Bob", tags: "node,js,express" },
  { id: 3, name: "Charlie", tags: "html,css,js" },
];

const output = {};

users.forEach(function (obj) {
  const { name, tags } = obj;
  if (output[tags] === undefined) output[tags] = [];
  output[tags].push(tags);
});

console.log(output);
