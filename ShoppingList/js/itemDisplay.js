import { itemsData } from "../assets/data/itemData.js";

function createItem(item) {
  const itemBox = document.createElement("div");
  itemBox.classList.add("item_box");
  itemBox.setAttribute("data-id", item.id);
  itemBox.innerHTML = `
              <img src="${item.imageUrl}" alt="${item.itemName}" />
              <p class="wish_btn">♥</p>
              <p class="item_name">${item.itemName}</p>
              <p class="item_price">${item.itemPrice}원</p>
            `;
  return itemBox;
}

const boxWrapped = document.querySelector(".box_wrapped");
function displayItems(category) {
  boxWrapped.innerHTML = "";
  itemsData
    .filter((item) => category === "all" || item.type === category)
    .forEach((item) => {
      boxWrapped.appendChild(createItem(item));
    });
}

displayItems("all");

const navLinks = document.querySelectorAll(".floatNav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const category = e.target.dataset.type;
    displayItems(category);
  });
});
