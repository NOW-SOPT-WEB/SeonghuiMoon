import { itemsData } from "/ShoppingList/assets/data/itemData.js";
import { getComma } from "../utils/getComma.js";
import { HOME_PAGE_URL } from "../constant/const.js";

const toHomeBtn = document.querySelector(".toHomeBtn");
toHomeBtn.addEventListener("click", () => {
  window.location.href = HOME_PAGE_URL;
});

function loadCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const tableBody = document.querySelector(".cartInfo");

  cart.forEach((itemId) => {
    const item = itemsData.find((item) => item.id === parseInt(itemId));
    if (item) {
      const row = tableBody.insertRow();
      row.innerHTML = `
            <td><input type="checkbox" class="chkbox" value="${item.id}"></td>
            <td><img src="${item.imageUrl}" alt="${item.itemName}"></td>
            <td>${item.itemName}</td>
            <td>${getComma(parseInt(item.itemPrice))}원</td>
            <td>${item.type}</td>
            <td><button onclick="removeItem(${item.id})">삭제</button></td>
          `;
    }
  });
}

function removeItem(itemId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const newCart = cart.filter((id) => parseInt(id) !== itemId);
  localStorage.setItem("cart", JSON.stringify(newCart));
  location.reload();
}

window.removeItem = removeItem;
loadCartItems();

const allCheckBtn = document.querySelector(".allCheckBtn");
allCheckBtn.addEventListener("click", function () {
  const cartItems = document.querySelectorAll('input[class="chkbox"]');

  const isChecked = allCheckBtn.checked;
  cartItems.forEach((item) => {
    item.checked = isChecked;
  });
});
