// const baseURL = `https://restcountries.com/v3.1`;

// // const printDetails = function (data) {
// //   const ret = {
// //     Country: data.name.common,
// //     Capital: data.capital?.[0],
// //     Region: data.region,
// //     Population: data.population,
// //     Languages: Object.values(data.languages).join(", "),
// //     Flag: data.flags.svg,
// //     id: data.idd.root,
// //     flag: data.flag,
// //   };
// //   return ret;
// // };

// const displayCountryDetails = function (country) {
//   //1. Send Request to Server
//   const req = new XMLHttpRequest();
//   req.open("GET", `${baseURL}/name/${country}`);
//   req.send();

//   //2. Receive Response

//   req.addEventListener("load", function () {
//     const data = JSON.parse(req.responseText).at(0);
//     // const res = printDetails(data);
//     console.log(data);
//   });
// };

// displayCountryDetails("pakistan");
