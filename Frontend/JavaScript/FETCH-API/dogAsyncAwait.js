const imgTag = document.querySelector("img");
const btn = document.querySelector("button");

const getNewDog = async function () {
  const res = [];
  try {
    const resp = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await resp.json();
    imgTag.src = data.message;
  } catch (error) {
    console.log("An Error Detected!!!");
    console.log(error.message);
  }
  console.log("Api Call Ended");
  console.log(res);
};

getNewDog();
addEventListener("click", getNewDog);
