import { itemsData } from "../assets/data/itemData.js";

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
