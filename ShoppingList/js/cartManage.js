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