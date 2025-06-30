/*
### **1. Group and Transform Data from Array of Strings**

**Question:**

Given an array of strings in the format `"name|role|team"`, write a function that:
Converts this array into an object.
Groups entries by team as keys.
Each team should have an array of objects with name and role.
Sort members alphabetically by name inside each team.
*/

const data = [
  "Alice|Developer|Frontend",
  "Bob|Designer|UI",
  "Charlie|Developer|Frontend",
  "David|Manager|Backend",
  "Eve|Developer|Backend",
];

const dataMap = data.forEach(function (str) {
  let res = {};
  let splitstr = str.split("|");
  let [name, role, team] = splitstr;
  let obj = { name: name, role: role, team: team };

  if (res[team] === undefined) res[team] = [];
  res[team].push(obj);
  console.log(res);
});
