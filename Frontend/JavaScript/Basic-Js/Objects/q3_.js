const emails = [
  "  Alice@Example.com ",
  "BOB@GMAIL.COM",
  "charlie@Gmail.com ",
  "david@EXAMPLE.COM ",
  " eve@yahoo.com",
];

const getKey = function (email) {
  return email.split("@").at(1);
};

const res = emails
  .map((email) => email.trim().toLocaleLowerCase())
  .reduce(function (acc, email) {
    const key = getKey(email);
    if (acc[key] === undefined) acc[key] = Array[email];
    else acc[key].push(email);
    return acc;
  }, {});

console.log(res);
