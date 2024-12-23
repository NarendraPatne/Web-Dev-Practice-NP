let bt = document.querySelector(".btn");
let btns = document.querySelectorAll(".btz");
for (b of btns) {
  // b.onmouseenter=entprint;
  // b.onclick=print;
  b.addEventListener("click",print);
  b.addEventListener("click",hprint);
  b.addEventListener("mouseenter",entprint);
}
console.dir(bt);
bt.onclick = function () {
  console.log("Button Clicked!");
};
function print() {
  console.log("Liked");
}
function hprint() {
  console.log("Hello!");
}
function entprint() {
  console.log("Mouse Entered");
}
