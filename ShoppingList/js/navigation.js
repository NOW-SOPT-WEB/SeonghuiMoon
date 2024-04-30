import { HOME_PAGE_URL } from "../const/const.js";

const homeBtn = document.querySelector(".homeBtn");
homeBtn.addEventListener("click", () => {
  window.location.href = HOME_PAGE_URL;
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
