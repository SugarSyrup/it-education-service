const category = document.querySelectorAll("li");

const SETCATEGORYNUM = "setCategoryNum"; 
localStorage.setItem(SETCATEGORYNUM, 3);

let categoryNum = Number(localStorage.getItem(SETCATEGORYNUM)) -1;


category[categoryNum].style.backgroundColor = "rgb(109, 255, 98)";
category[categoryNum].style.width = "18.3vw";
category[categoryNum].style.position = "relative";
category[categoryNum].style.left = "1.05vw";

for(let i = 0; i < category.length; i++){
  category[i].addEventListener("click", () => {
    if(i != 2){
      localStorage.setItem(SETCATEGORYNUM, category[i].classList[0]);
      location.href = "/content/kiosk/fast-food/html/set-option.html"
    }
  })
}

//---------------------------------------------------
const buger = document.querySelector(".selected-buger");
const selectedBugerName = document.querySelector(".selected-menu-name");
const selectedBugerprice = document.querySelector(".selected-menu-price");

const bugerArr = ["/content/kiosk/img/fast-food/buger/1955.png", "/content/kiosk/img/fast-food/buger/bacon-tomato-buger.png", "/content/kiosk/img/fast-food/buger/big-mac.png", "/content/kiosk/img/fast-food/buger/cheese-buger.png", "/content/kiosk/img/fast-food/buger/bulgogi-buger.png", "/content/kiosk/img/fast-food/buger/crispy-buger.png", "/content/kiosk/img/fast-food/buger/quarter-pound.png", "/content/kiosk/img/fast-food/buger/shrimp-buger.png"];
const bugerNameArr = ["1955 버거", "베이컨 버거", "빅맥", "치즈 버거", "불고기 버거", "크리스피 버거", "쿼터파운드 버거", "새우버거"];

let bugerImg = localStorage.getItem("optionImg");
let bugerName = localStorage.getItem("optionName");
let bugerPrice = localStorage.getItem("optionPrice");
let singleBugerImg = bugerArr[bugerNameArr.indexOf(bugerName)];

let snackImg = localStorage.getItem("snackImg");
let snackName = localStorage.getItem("snackName");
let snackPrice = localStorage.getItem("snackPrice");

let drinkimg = localStorage.getItem("drinkImg");
let drinkName = localStorage.getItem("drinkName");
let drinkPrice = localStorage.getItem("drinkPrice");

const menuImg = document.querySelectorAll(".selected-product-img");
const menuName = document.querySelectorAll(".name");
const menuPrice = document.querySelectorAll(".price");

let menuImgArr = [singleBugerImg, snackImg, drinkimg];
let menuNameArr = [bugerName, snackName, drinkName];
let menuPriceArr = [bugerPrice, snackPrice, drinkPrice];

buger.setAttribute("src", bugerImg);
selectedBugerName.innerText = bugerName + "세트";
selectedBugerprice.innerText = bugerPrice;

for(let i = 0; i < menuImg.length; i++){
  menuImg[i].setAttribute("src", menuImgArr[i]);
  menuName[i].innerText = menuNameArr[i];
  menuPrice[i].innerText = menuPriceArr[i];
}
//---------------------------------------------------------------사진
const bugerChangeBtn = document.querySelector(".change-buger");
const snackChangeBtn = document.querySelector(".change-snack");
const drinkChangeBtn = document.querySelector(".change-drink");

bugerChangeBtn.addEventListener("click", () => {
  localStorage.setItem("bugerChange", "change");
  location.href = "/content/kiosk/common/html/practice-category.html";
})

snackChangeBtn.addEventListener("click", () => {
  localStorage.setItem("setCategoryNum", 1);
  localStorage.setItem("snackChange", "change");
  location.href = "/content/kiosk/fast-food/html/set-option.html";
})

drinkChangeBtn.addEventListener("click", () => {
  localStorage.setItem("setCategoryNum", 2);
  localStorage.setItem("drinkChange", "change");
  location.href = "/content/kiosk/fast-food/html/set-option.html";
})
//-----------------------------------------------menu-btn
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const amount = document.querySelector(".amount-num");

const AMOUNT = "amount";

if(!localStorage.getItem(AMOUNT)){
  localStorage.setItem(AMOUNT, amount.innerText);
}
let amountNum = Number(localStorage.getItem(AMOUNT));

amount.innerText = amountNum;

plus.addEventListener("click", () => {
  amountNum++;
  amount.innerText = amountNum;
  localStorage.setItem(AMOUNT, amountNum);
})
minus.addEventListener("click", () => {
  amountNum--;
  amount.innerText = amountNum;
  localStorage.setItem(AMOUNT, amountNum);
})
//------------------------------------------------------------amount
const cancel = document.querySelector(".cancel");
const addCart = document.querySelector(".add-cart");

cancel.addEventListener("click", () => {
  localStorage.removeItem("drinkName");
  localStorage.removeItem("drinkImg");
  localStorage.removeItem("drinkPrice");
  localStorage.removeItem("snackName");
  localStorage.removeItem("snackIMG");
  localStorage.removeItem("snackPrice");
  localStorage.removeItem("optionName");
  localStorage.removeItem("optionImg");
  localStorage.removeItem("optionPrice");
  localStorage.removeItem("amount");
  location.href = "/content/kiosk/common/html/practice-category.html";
})
addCart.addEventListener("click", () => {
  location.href = "/content/kiosk/fast-food/html/order-list.html";
})