const btnLogin = document.getElementById("login");
const btnLogout = document.getElementById("logout");

const preLogin = document.querySelector(".pre-login");
const praLogin = document.querySelector(".pra-login");

const hamburgerMenu = document.querySelector("#hamburger-menu");

btnLogin.onclick = function () {
  auth();
};

btnLogout.onclick = function () {
  auth();
};

function auth() {
  preLogin.classList.toggle("active");
  preLogin.classList.remove("sidebar");
  praLogin.classList.toggle("active");
  hamburgerMenu.classList.toggle("non-active");
}

// sidebar

hamburgerMenu.onclick = function () {
  console.log("click");
  preLogin.classList.toggle("sidebar");
};
