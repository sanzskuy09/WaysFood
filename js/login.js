const preLogin = document.querySelector(".pre-login");
const praLogin = document.querySelector(".pra-login");

const hamburgerMenu = document.querySelector("#hamburger-menu");

// sidebar
hamburgerMenu.onclick = function () {
  console.log("click");
  preLogin.classList.toggle("sidebar");
};

function auth() {
  preLogin.classList.toggle("active");
  praLogin.classList.toggle("active");
  hamburgerMenu.classList.toggle("non-active");
}

// Open modal register
const btnRegister = document.getElementById("btnRegister");
const modalRegister = document.getElementById("modalRegister");
const register = document.getElementById("register");

btnRegister.onclick = function () {
  modalRegister.style.display = "block";
};

register.onclick = function () {
  modalRegister.style.display = "none";
  auth();
};

// Open modal Login
const btnLogin = document.getElementById("btnLogin");
const modalLogin = document.getElementById("modalLogin");
const login = document.getElementById("login");

btnLogin.onclick = function () {
  modalLogin.style.display = "block";
};

login.onclick = function () {
  modalLogin.style.display = "none";
  auth();
};

// Close Modal
window.onclick = function (e) {
  if (e.target == modalLogin || e.target == modalRegister) {
    modalLogin.style.display = "none";
    modalRegister.style.display = "none";
  }
};

// Switch login & register modal
document.getElementById("openLogin").onclick = function (e) {
  modalRegister.style.display = "none";
  modalLogin.style.display = "block";
};

document.getElementById("openRegister").onclick = function (e) {
  modalLogin.style.display = "none";
  modalRegister.style.display = "block";
};
