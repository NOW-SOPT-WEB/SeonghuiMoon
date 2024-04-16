const homeBtn = document.querySelector(".homeBtn");
homeBtn.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/ShoppingList/index.html";
});

const menubarBtn = document.querySelector(".menubarBtn");
const sideNav = document.querySelector(".sideNav");
const closeBtn = document.querySelector(".closeBtn");

menubarBtn.addEventListener("click", function () {
  sideNav.classList.toggle("open");
});

closeBtn.addEventListener("click", function () {
  sideNav.classList.remove("open");
});
