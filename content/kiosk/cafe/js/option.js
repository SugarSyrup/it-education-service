const optionImg = localStorage.getItem("optionImg");
const optionName = localStorage.getItem("optionName");

const menuImg = document.querySelector(".menu-img");
const menuName = document.querySelector(".menu-name");

menuImg.setAttribute("src", optionImg);
menuName.innerText = optionName;
