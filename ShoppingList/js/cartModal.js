import { itemsData } from "/ShoppingList/assets/data/itemData.js";

const purchaseBtn = document.querySelector(".purchaseBtn");
purchaseBtn.addEventListener("click", () => {
  const checkedItems = document.querySelectorAll(
    'input[name="cartItem"]:checked'
  );
  const modalItems = document.querySelector(".modalItems");
  let totalPrice = 0;

  checkedItems.forEach((checkbox) => {
    const itemId = parseInt(checkbox.value);
    const item = itemsData.find((item) => item.id === itemId);
    if (item) {
      modalItems.innerHTML += `
      <div class="modalItem">
        <img src="${item.imageUrl}" alt="${item.itemName}" />
        <p class="item_name">${item.itemName}</p>
        <p class="item_price">${item.itemPrice}원</p>
        </div>
      `;
      totalPrice += parseInt(item.itemPrice);
    }
  });
  modalItems.innerHTML += `<div class="totalPrice">총금액: ${totalPrice}원</div>`;
  document.querySelector(".purchaseModal").style.display = "block";
});

document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains("closeModalBtn")) {
    const modalItems = document.querySelector(".modalItems");
    modalItems.innerHTML = "";
    document.querySelector(".purchaseModal").style.display = "none";
  }
  if (event.target.classList.contains("confirmBtn")) {
    const checkedItems = document.querySelectorAll(
      'input[name="cartItem"]:checked'
    );
    checkedItems.forEach((item) => {
      removeItem(parseInt(item.value));
    });
    document.querySelector(".purchaseModal").style.display = "none";
  }
});
