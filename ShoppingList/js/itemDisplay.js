import { itemsData } from "../assets/data/itemData.js";
import { getComma } from "../utils/getComma.js";

function createItem(item) {
  const itemBox = document.createElement("div");
  itemBox.classList.add("item_box");
  itemBox.setAttribute("data-id", item.id);
  itemBox.innerHTML = `
              <img src="${item.imageUrl}" alt="${item.itemName}" />
              <p class="wish_btn">♥</p>
              <p class="item_name">${item.itemName}</p>
              <p class="item_price">${getComma(parseInt(item.itemPrice))}원</p>
            `;
  return itemBox;
}

function displayItems(category) {
  const boxWrapped = document.querySelector(".box_wrapped");
  boxWrapped.innerHTML = "";
  itemsData
    .filter((item) => category === "all" || item.type === category)
    .forEach((item) => {
      boxWrapped.appendChild(createItem(item));
    });
}

displayItems("all");

const navLinks = document.querySelectorAll(".cateBtn");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const category = e.target.dataset.type;
    displayItems(category);
  });
});
