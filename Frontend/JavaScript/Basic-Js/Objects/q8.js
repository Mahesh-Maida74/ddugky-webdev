const formData = {
  fullName: "   Mahesh Maida   ",
  email: "maheshmaida@gmail.com    ",
  hobbbies: "coding, music, reading,Coding",
};

// const { fullName, email, hobbbies } = formData;

// formData.fullName = fullName.trim();
// formData.email = email.trim();
// formData.hobbbies = Array.from(
//   new Set(hobbbies.split(",").map((str) => str.trim().toLowerCase()))
// );

// console.log(formData);

const trimstr = formData.fullName.trim();
const emailtrim = formData.email.trim();
console.log(emailtrim);
