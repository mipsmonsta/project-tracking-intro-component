const hamburgerIcon = document.body.querySelector("#hamburger__icon");
const hamburgerMenu = document.body.querySelector(".hamburger__menu");
let open = false;

console.log(hamburgerMenu);

hamburgerIcon.addEventListener("click", (e) => {
  if (open === false) {
    hamburgerIcon.src = "./images/icon-close.svg";
    hamburgerMenu.classList.toggle("open");
    open = true;
  } else {
    hamburgerIcon.src = "./images/icon-hamburger.svg";
    hamburgerMenu.classList.toggle("open");
    open = false;
  }
  e.stopPropagation(); //don't bubble event up to root
});

document.addEventListener("click", () => {
  if (open === true) {
    hamburgerMenu.classList.toggle("open");
    open = false;
  }
});
