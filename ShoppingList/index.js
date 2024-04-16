import { itemsData } from "./assets/data/itemData.js";

const homeBtn = document.querySelector(".homeBtn");
homeBtn.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/ShoppingList/index.html";
});

const navLinks = document.querySelectorAll("nav ul li a");
const boxWrapped = document.querySelector(".box_wrapped");

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
    displayItems(category);
  });
});

displayItems("all");

const bannerWrapped = document.querySelector(".banner_wrapped");
itemsData.forEach((item) => {
  const img = document.createElement("img");
  img.src = item.imageUrl;
  img.alt = item.itemName;
  img.classList.add("banner_item");
  bannerWrapped.appendChild(img);
});

bannerWrapped.addEventListener("animationiteration", () => {
  bannerWrapped.appendChild(bannerWrapped.firstChild.cloneNode(true));
  bannerWrapped.removeChild(bannerWrapped.firstChild);
});

const itemBoxBtn = document.querySelector(".box_wrapped");
itemBoxBtn.addEventListener("click", function (event) {
  let target = event.target;
  while (target && !target.classList.contains("item_box")) {
    target = target.parentNode;
  }

  if (target && target.classList.contains("item_box")) {
    const itemId = target.getAttribute("data-id");

    if (confirm("장바구니에 추가하시겠습니까?")) {
      let cart = localStorage.getItem("cart");
      cart = cart ? JSON.parse(cart) : [];

      if (!cart.includes(itemId)) {
        cart.push(itemId);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("추가되었습니다.");
      } else {
        alert("이미 장바구니에 추가된 아이템입니다.");
      }
    } else {
      alert("취소되었습니다.");
    }
  }
});
