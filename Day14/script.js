const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const b4 = document.querySelector("#b4");

b1.addEventListener("click", () => {
  alert("Clicked!!");
});

b2.addEventListener("mouseover", () => {
  alert("Hovered!!");
});

b3.addEventListener("mouseover", () => {
  b3.innerHTML = "Magic!!";
});

b3.addEventListener("mouseout", () => {
  b3.innerHTML = "Hover On Me";
});

b4.addEventListener("mousedown", () => {
  b4.innerHTML = "Magic!!";
});

b4.addEventListener("mouseup", () => {
  b4.innerHTML = "Click n Hold";
});
