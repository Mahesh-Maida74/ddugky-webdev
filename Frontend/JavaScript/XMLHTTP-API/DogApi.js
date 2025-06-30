const RandomDOgPic = "https://dog.ceo/api/breeds/image/random";

let btn = document.getElementById("button");
let imgTag = document.getElementById("image");

const getNewDog = function () {
  const req = new XMLHttpRequest();
  req.open("GET", `${RandomDOgPic}`);
  req.send();

  req.addEventListener("load", function () {
    const data01 = JSON.parse(req.responseText);
    const dogImg = data01.message;
    imgTag.src = dogImg;
  });
};

getNewDog();
btn.addEventListener("click", getNewDog);
