import { itemsData } from "/ShoppingList/assets/data/itemData.js";
import { getComma } from "../utils/getComma.js";

const purchaseModal = document.querySelector(".purchaseModal");
const purchaseBtn = document.querySelector(".purchaseBtn");
purchaseBtn.addEventListener("click", () => {
  const checkedItems = document.querySelectorAll(
    'input[class="chkbox"]:checked'
  );
  const modalItems = document.querySelector(".modalItems");
  modalItems.innerHTML = "";
  let totalPrice = 0;

  checkedItems.forEach((checkbox) => {
    const itemId = parseInt(checkbox.value);
    const item = itemsData.find((item) => item.id === itemId);
    if (item) {
      modalItems.innerHTML += `
      <div class="modalItem">
        <img src="${item.imageUrl}" alt="${item.itemName}" />
        <p class="item_name">${item.itemName}</p>
        <p class="item_price">${getComma(parseInt(item.itemPrice))}원</p>
      </div>
      `;
      totalPrice += parseInt(item.itemPrice);
    }
  });

  modalItems.innerHTML += `<div class="totalPrice">총금액: ${getComma(
    totalPrice
  )}원</div>`;
  purchaseModal.classList.remove("hidden");
});

document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains("closeModalBtn")) {
    purchaseModal.classList.add("hidden");
  }
  if (event.target.classList.contains("confirmBtn")) {
    const checkedItems = document.querySelectorAll(
      'input[class="chkbox"]:checked'
    );
    checkedItems.length ? alert("구매 완료") : alert("구매할 상품이 없습니다.");
    checkedItems.forEach((item) => {
      removeItem(parseInt(item.value));
    });
    purchaseModal.classList.add("hidden");
  }
});
