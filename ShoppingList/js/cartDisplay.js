import { itemsData } from "/ShoppingList/assets/data/itemData.js";
import { getComma } from "../utils/getComma.js";

function loadCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const tableBody = document.querySelector("table tbody");

  cart.forEach((itemId) => {
    const item = itemsData.find((item) => item.id === parseInt(itemId));
    if (item) {
      const row = tableBody.insertRow();
      row.innerHTML = `
            <td><input type="checkbox" class="chkbox" name="cartItem" value="${
              item.id
            }"></td>
            <td><img src="${item.imageUrl}" alt="${item.itemName}"></td>
            <td><span>${item.itemName}</span></td>
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
  const cartItems = document.querySelectorAll('input[name="cartItem"]');

  const isChecked = allCheckBtn.checked;
  cartItems.forEach((item) => {
    item.checked = isChecked;
  });
});

const toHomeBtn = document.querySelector(".toHomeBtn");
toHomeBtn.addEventListener("click", () => {
  window.location.href =
    "http://127.0.0.1:5500/ShoppingList/pages/mainPage.html";
});
