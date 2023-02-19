// show modal map
const btnMap = document.getElementById("btn-map");
const modalMap = document.getElementById("maps-modal");

btnMap.onclick = function () {
  modalMap.classList.add("active");
};

// Confirm Order
const btnConfirm = document.getElementById("btn-confirm");

btnConfirm.onclick = function () {
  document.querySelector(".delivery").style.display = "block";
  document.querySelector(".location-detail").style.display = "none";
};

// Finish Order
const BtnFinish = document.getElementById("btn-finish");

BtnFinish.onclick = function () {
  document.getElementById("text-head").innerHTML =
    "Waiting for the transaction to be approved";

  BtnFinish.style.display = "none";
};

// Close Modal
window.onclick = function (e) {
  if (!modalMap.contains(e.target) && !btnMap.contains(e.target)) {
    modalMap.classList.remove("active");
  }
};
