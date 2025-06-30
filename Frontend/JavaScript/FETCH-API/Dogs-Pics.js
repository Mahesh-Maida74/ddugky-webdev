// const imgTag = document.querySelector("img");
// const btn = document.querySelector("button");

// const getNewDog = function () {
//   fetch("https://dog.ceo/api/breeds/image/random", { method: "GET" })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       imgTag.src = data.message;
//     })
//     .catch(function (error) {
//       console.log("An Error Detected !!!!!");
//       console.log(error.message);
//     })

//     .finally(function () {
//       console.log("APi Call Ended");
//     });
// };

// btn.addEventListener("click", getNewDog);

// getNewDog();

const RandomFox = fetch("	https://randomfox.ca/floof/");

console.log(RandomFox);
