const Weather =
  "https://world.openfoodfacts.org/api/v0/product/737628064502.json";

let button = document.getElementById("BTN");
let h1 = document.getElementById("H1");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

// button.addEventListener("click", function () {
//   h1.innerText = getData;
// });
button.onclick = function () {
  if (getData.img) {
    img1.src = getData.img;
    img2.src = getData.img1;
    img3.src = getData.img2;
  } else {
    alert("Image data not loaded yet. Please wait.");
  }
};

const displaydata = function (data01) {
  let obj = {
    img: data01.product.image_front_small_url,
    img1: data01.product.image_front_thumb_url,
    img2: data01.product.image_nutrition_small_url,
  };
  return obj;
};

const req = new XMLHttpRequest();
req.open("GET", `${Weather}`);
req.send();

req.addEventListener("load", function () {
  const data01 = JSON.parse(req.responseText);
  getData = displaydata(data01);
});
