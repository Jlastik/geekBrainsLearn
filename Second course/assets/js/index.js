const burgerButton = document.getElementById("burget_button");
const burgerMenu = document.getElementById("burger_menu");
const closeBurgerButton = document.getElementById("burger_close");

let open = false;

const handleClick = () => {
  if (!open) {
    burgerMenu.classList.add("open");
    open = !open;
  } else {
    burgerMenu.classList.remove("open");
    open = !open;
  }
};

closeBurgerButton.addEventListener("click", handleClick);
burgerButton.addEventListener("click", handleClick);
