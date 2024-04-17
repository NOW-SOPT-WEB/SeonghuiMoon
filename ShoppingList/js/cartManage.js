import { itemsData } from "/ShoppingList/assets/data/itemData.js";

document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.querySelector("table tbody");

  function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach((itemId) => {
      const item = itemsData.find((item) => item.id === parseInt(itemId));
      if (item) {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td><input type="checkbox" name="cartItem" value="${item.id}"></td>
            <td><img src="${item.imageUrl}" alt="${item.itemName}"></td>
            <td><span>${item.itemName}</span></td>
            <td>${item.itemPrice}원</td>
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
});
