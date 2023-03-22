// change the plan time
let time = document.querySelector(".card .plan input");
let sub = document.querySelector(".card .price sup");

time.addEventListener("click", function () {
  if (time.checked) {
    sub.innerHTML = "/year";
  } else {
    sub.innerHTML = "/month";
  }
});

let box = document.querySelector(".card #slider");
let price = document.querySelector(".price span");
let view = document.querySelector(".view span");
let track = document.querySelector(".slider .track");

track.style.width = `${(box.value / 32) * 100}%`;
price.innerHTML = `$${box.value}.00`;
view.innerHTML = `${(+box.value * 100) / 16}K`;

box.oninput = function () {
  track.style.width = `${(box.value / 32) * 100}%`;
    if (time.checked) {
      price.innerHTML = `$${+box.value * 2}.00`;
      view.innerHTML = `${Math.floor(((+box.value * 100) / 16) * 2)}k`;
    } else {
      price.innerHTML = `$${box.value}.00`;
      view.innerHTML = `${Math.floor((+box.value * 100) / 16)}k`;
    }
};
