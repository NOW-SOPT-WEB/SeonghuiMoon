import { itemsData } from "./assets/data/itemData.js";

const homeBtn = document.querySelector(".homeBtn");
homeBtn.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/ShoppingList/index.html";
});

const navLinks = document.querySelectorAll("nav ul li a");
const boxWrapped = document.querySelector(".box_wrapped");

function createItem(item) {
  const wishBox = document.createElement("div");
  wishBox.classList.add("wish_box");
  wishBox.innerHTML = `
            <img src="${item.imageUrl}" />
            <p class="wish_btn">♥</p>
            <p class="item_name">${item.itemName}</p>
            <p class="item_price">${item.itemPrice}</p>
          `;
  return wishBox;
}

function displayItems(category) {
  boxWrapped.innerHTML = "";
  itemsData
    .filter((item) => category === "all" || item.type === category)
    .forEach((item) => {
      boxWrapped.appendChild(createItem(item));
    });
}

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const category = e.target.dataset.type;
    console.log(category);
    displayItems(category);
  });
});

displayItems("all");
