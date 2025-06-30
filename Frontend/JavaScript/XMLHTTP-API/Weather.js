// const URl =
//   "https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&hourly=temperature_2m";

// const displaydata = function (data) {
//   const obj = {};
// };

// const req = new XMLHttpRequest();
// req.open("GET", `${URl}`);
// req.send();

// req.addEventListener("load", function () {
//   const data = JSON.parse(req.responseText);
//   const res = displaydata(data);
// });

// const URl = "https://www.weatherapi.com/docs/conditions.json";

// const displaydata = function (data) {
//   const obj = {
//     code: data.code,
//     day: data.day,
//     night: data.night,
//     languages: data.languages[11],
//   };
//   return obj;
// };

// const req = new XMLHttpRequest();
// req.open("GET", `${URl}`);
// req.send();

// req.addEventListener("load", function () {
//   const data = JSON.parse(req.responseText).at(4);
//   // console.log(data);
//   const res = displaydata(data);
//   console.log(res);
// });

const URl = "https://www.weatherapi.com/docs/conditions.json";

const displaydata = function (data) {
  // const lang = data.languages.find((lang) => lang.lang_iso === "hi");

  const values = [
    data.code,
    data.day,
    data.night,
    lang.lang_name,
    lang.lang_iso,
    lang.day_text,
    lang.night_text,
  ];

  return values;
};

const req = new XMLHttpRequest();
req.open("GET", `${URl}`);
req.send();

req.addEventListener("load", function () {
  const data = JSON.parse(req.responseText).at(0); // change index if needed
  const res = displaydata(data);

  // Print each value
  res.forEach((value) => console.log(value));
});
