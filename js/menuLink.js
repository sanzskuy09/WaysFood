const userIcon = document.getElementById("user");

const subMenu = document.querySelector(".sub-menu");

userIcon.onclick = function () {
  subMenu.classList.toggle("open-menu");
};
