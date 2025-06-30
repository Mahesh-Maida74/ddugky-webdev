// const baseUrlName = "https://restcountries.com/v3.1/name";
// const baseUrlAlpha = "https://restcountries.com/v3.1/alpha";

// let heding1 = document.querySelector("h1");
// let heding2 = document.querySelector("h2");
// let heding3 = document.querySelector("h3");
// let heding4 = document.querySelector("h4");
// let img1 = document.querySelector("image");
// let img2 = document.querySelector("image");
// let img3 = document.querySelector("image");
// let img4 = document.querySelector("image");

// let btn = document.querySelector("button");

// let res = [];

// const print4Neighbours = function (countryName) {
//   fetch(`${baseUrlName}/${countryName}`)
//     .then(function (resp) {
//       return resp.json();
//     })
//     .then(function ([data]) {
//       const country = data.name.common;
//       const flag = data.flag;
//       const neighbourAlpha = data.borders[0];

//       res.push(country, flag);

//       console.log(res);

//       return fetch(`${baseUrlAlpha}/${neighbourAlpha}`);
//     })

//     .then(function (resp) {
//       return resp.json();
//     })
//     .then(function (data) {
//       const country = data[0];

//       res.push(country.name.common);
//       res.push(country.flag);

//       const neighbourAlpha = country.borders[0];

//       return fetch(`${baseUrlAlpha}/${neighbourAlpha}`);
//     })

//     .then(function (resp) {
//       return resp.json();
//     })
//     .then(function (data) {
//       const country = data[0];
//       res.push(country.name.common);
//       res.push(country.flag);
//       const neighbourAlpha = country.borders[0];

//       return fetch(`${baseUrlAlpha}/${neighbourAlpha}`);
//     })

//     .then(function (resp) {
//       return resp.json();
//     })
//     .then(function (data) {
//       const country = data[0];
//       res.push(country.name.common);
//       res.push(country.flag);
//     })

//     .catch(function (err) {
//       console.log("Error:", err.message);
//     });
// };

// btn.addEventListener("click", function () {
//   heding1.innerText = res;
//   heding2.innerText = res;
//   heding3.innerText = res;
//   heding4.innerText = res;
//   img1.src = res;
//   img2.src = res;
//   img3.src = res;
//   img4.src = res;
// });

// print4Neighbours("india");

const baseUrlName = "https://restcountries.com/v3.1/name";
const baseUrlAlpha = "https://restcountries.com/v3.1/alpha";

let btn = document.querySelector("button");
let resultList = document.getElementById("resultList");

let res = [];

const print4Neighbours = function (countryName) {
  fetch(`${baseUrlName}/${countryName}`)
    .then((resp) => resp.json())
    .then(([data]) => {
      const country = data.name.common;
      const flag = data.flags.png;
      res.push({ name: country, flag: flag });

      return fetch(`${baseUrlAlpha}/${data.borders[0]}`);
    })
    .then((resp) => resp.json())
    .then(([data]) => {
      res.push({ name: data.name.common, flag: data.flags.png });
      return fetch(`${baseUrlAlpha}/${data.borders[0]}`);
    })
    .then((resp) => resp.json())
    .then(([data]) => {
      res.push({ name: data.name.common, flag: data.flags.png });
      return fetch(`${baseUrlAlpha}/${data.borders[0]}`);
    })
    .then((resp) => resp.json())
    .then(([data]) => {
      res.push({ name: data.name.common, flag: data.flags.png });
    })
    .catch((err) => {
      console.log("Error:", err.message);
    });
};

btn.addEventListener("click", function () {
  resultList.innerHTML = "";

  res.forEach((item) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${item.name}</strong><br/>
      <img src="${item.flag}" alt="${item.name}" width="80" style="margin-bottom:10px"/>
    `;

    resultList.appendChild(li);
  });
});

print4Neighbours("india");
